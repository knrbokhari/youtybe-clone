export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {};
export const addView = async (req, res, next) => {};
export const trend = async (req, res, next) => {};
export const random = async (req, res, next) => {};
export const sub = async (req, res, next) => {};
export const getByTag = async (req, res, next) => {};
export const search = async (req, res, next) => {};
