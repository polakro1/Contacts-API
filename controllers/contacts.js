const Contact = require("../models/contact");
const createHttpError = require("http-errors");

module.exports.listAllContacts = async (req, res, next) => {
  const userId = req.session.userId;
  const search = req.query.search;
  try {
    if (search) {
      const contacts = await Contact.find({
        $and: [
          { owner: userId },
          {
            $or: [
              { firstName: { $regex: search, $options: "i" } },
              { lastName: { $regex: search, $options: "i" } },
            ],
          },
        ],
      });
      return res.status(200).json(contacts);
    }

    const contacts = await Contact.find({ owner: userId });
    res.status(200).json(contacts);
  } catch (error) {
    next(createHttpError(404, error));
  }
};

module.exports.getContact = async (req, res, next) => {
  const id = req.query.id;
  try {
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    next(createHttpError(404, error));
  }
};

module.exports.createContact = async (req, res, next) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    email: req.body.email,
  });
  newContact.owner = req.session.userId;
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    next(createHttpError(400, error));
  }
};

module.exports.updateContact = async (req, res, next) => {
  const id = req.query.id;
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    email: req.body.email,
  };
  try {
    await Contact.findByIdAndUpdate(id, newContact);
    res.status(202).json(newContact);
  } catch (error) {
    next(createHttpError(401, error));
  }
};

module.exports.deleteContact = async (req, res, next) => {
  const id = req.query.id;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(203).json({ id: id });
  } catch (error) {
    next(createHttpError(402, error));
  }
};
