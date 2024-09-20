const Advert = require('../models/Advert');

// Create a new advert
exports.createAdvert = async (req, res) => {
  try {
    const newAdvert = await Advert.create({
      ...req.body,
    });
    res.status(201).json({ success: true, data: newAdvert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch all adverts (with optional filters)
exports.getAllAdverts = async (req, res) => {
  try {
    const adverts = await Advert.find();
    res.status(200).json({ success: true, data: adverts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch a single advert by ID
exports.getAdvertById = async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);
    if (!advert) {
      return res.status(404).json({ success: false, message: 'Advert not found' });
    }
    res.status(200).json({ success: true, data: advert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an advert
exports.updateAdvert = async (req, res) => {
  try {
    const updatedAdvert = await Advert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAdvert) {
      return res.status(404).json({ success: false, message: 'Advert not found' });
    }
    res.status(200).json({ success: true, data: updatedAdvert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an advert
exports.deleteAdvert = async (req, res) => {
  try {
    const advert = await Advert.findByIdAndDelete(req.params.id);
    if (!advert) {
      return res.status(404).json({ success: false, message: 'Advert not found' });
    }
    res.status(200).json({ success: true, message: 'Advert deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Pause an advert
exports.pauseAdvert = async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);
    if (!advert) {
      return res.status(404).json({ success: false, message: 'Advert not found' });
    }
    advert.adsStatus = 'pause';
    await advert.save();
    res.status(200).json({ success: true, data: advert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Restart an advert
exports.restartAdvert = async (req, res) => {
  try {
    const advert = await Advert.findById(req.params.id);
    if (!advert) {
      return res.status(404).json({ success: false, message: 'Advert not found' });
    }
    advert.adsStatus = 'active';
    await advert.save();
    res.status(200).json({ success: true, data: advert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};