const User = require('../models/User');

/**
 * @desc    Find skill-swap matches for the current user
 * @route   GET /api/matches
 * @access  Private
 * 
 * Logic: UserA.Teaching overlaps UserB.Learning AND UserB.Teaching overlaps UserA.Learning
 */
exports.getMatches = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);

    if (!currentUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // The Matching Algorithm:
    // 1. Find users who teach what the current user wants to learn ($in: currentUser.learning)
    // 2. AND those same users must want to learn what the current user teaches ($in: currentUser.teaching)
    // 3. Exclude the current user from results
    const matches = await User.find({
      _id: { $ne: currentUser._id },
      teaching: { $in: currentUser.learning },
      learning: { $in: currentUser.teaching }
    }).select('-password');

    res.status(200).json({
      success: true,
      count: matches.length,
      data: matches
    });
  } catch (error) {
    console.error('Match Logic Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error in matching algorithm',
      error: error.message
    });
  }
};

/**
 * @desc    Discover users (Partial matches or broad interest)
 * @route   GET /api/discover
 */
exports.discoverUsers = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);

    // Find users with ANY overlap in teaching or learning, but not necessarily a perfect two-way swap
    const discover = await User.find({
      _id: { $ne: currentUser._id },
      $or: [
        { teaching: { $in: currentUser.learning } },
        { learning: { $in: currentUser.teaching } }
      ]
    })
    .limit(20)
    .select('-password');

    res.status(200).json({
      success: true,
      data: discover
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Discovery error'
    });
  }
};
