const mongoose = require("mongoose").default;
const Contact = require("../models/contact");
const User = require("../models/user");

const contacts = [
  {
    firstName: "Conroy",
    lastName: "Morrowe",
    email: "cmorrowe0@xrea.com",
    tel: "3192233052",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Torry",
    lastName: "Holton",
    email: "tholton1@shutterfly.com",
    tel: "4888558937",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Jemie",
    lastName: "Witherup",
    email: "jwitherup2@house.gov",
    tel: "7724573346",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Sibel",
    lastName: "Badham",
    email: "sbadham3@pagesperso-orange.fr",
    tel: "5728622787",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Davie",
    lastName: "Guly",
    email: "dguly4@odnoklassniki.ru",
    tel: "8351543597",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Josefa",
    lastName: "Chatres",
    email: "jchatres5@arstechnica.com",
    tel: "9324336973",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Marlene",
    lastName: "Du Hamel",
    email: "mduhamel6@china.com.cn",
    tel: "8248067369",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Lenee",
    lastName: "Custy",
    email: "lcusty7@hostgator.com",
    tel: "4589567342",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Stanton",
    lastName: "Dosdill",
    email: "sdosdill8@purevolume.com",
    tel: "4952149498",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Ezekiel",
    lastName: "Lisciandri",
    email: "elisciandri9@sohu.com",
    tel: "5531389116",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Nikolia",
    lastName: "Parlet",
    email: "nparleta@xing.com",
    tel: "8144468356",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Nickie",
    lastName: "Hillburn",
    email: "nhillburnb@seesaa.net",
    tel: "3149956753",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Hubey",
    lastName: "Shiel",
    email: "hshielc@umn.edu",
    tel: "2951722377",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Hamel",
    lastName: "Caccavari",
    email: "hcaccavarid@sohu.com",
    tel: "2275480099",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Zonda",
    lastName: "Schule",
    email: "zschulee@google.cn",
    tel: "6227328038",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Allys",
    lastName: "Bickerstasse",
    email: "abickerstassef@yelp.com",
    tel: "4871702290",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Rriocard",
    lastName: "Fredi",
    email: "rfredig@abc.net.au",
    tel: "5733122475",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Genevieve",
    lastName: "Ferreras",
    email: "gferrerash@bing.com",
    tel: "2513022521",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Priscella",
    lastName: "Crummey",
    email: "pcrummeyi@nifty.com",
    tel: "4361233736",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Kimmie",
    lastName: "Saggs",
    email: "ksaggsj@printfriendly.com",
    tel: "6896972179",
    owner: "660d7528f551913f92eee733",
  },
  {
    firstName: "Sheelah",
    lastName: "Eatock",
    email: "seatock0@mashable.com",
    tel: "1103959621",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Sandi",
    lastName: "Kunert",
    email: "skunert1@amazon.co.uk",
    tel: "9952466524",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Dorothy",
    lastName: "Whellans",
    email: "dwhellans2@soundcloud.com",
    tel: "1635396298",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Teodor",
    lastName: "Penhall",
    email: "tpenhall3@wisc.edu",
    tel: "6813074034",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Jan",
    lastName: "Mithon",
    email: "jmithon4@ameblo.jp",
    tel: "2213175102",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Janel",
    lastName: "Glen",
    email: "jglen5@uol.com.br",
    tel: "2863133128",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Brook",
    lastName: "Gibbonson",
    email: "bgibbonson6@csmonitor.com",
    tel: "6385986082",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Brina",
    lastName: "Balassa",
    email: "bbalassa7@weibo.com",
    tel: "1992215607",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Harlene",
    lastName: "Dike",
    email: "hdike8@domainmarket.com",
    tel: "7851496007",
    owner: "660d708ca01f351b3c4757de",
  },
  {
    firstName: "Magdaia",
    lastName: "Jurges",
    email: "mjurges9@patch.com",
    tel: "8562990062",
    owner: "660d708ca01f351b3c4757de",
  },
];
const users = [
  {
    _id: "660d708ca01f351b3c4757de",
    username: "username",
    email: "email@email.com",
    password: "$2b$10$nFCWFDgcU8iIdxuyPG0Cs.1Ec8QgqXGzc8xK.u821Z9svDYGXgxZa",
  },
  {
    _id: "660d7528f551913f92eee733",
    username: "username1",
    email: "email@gmail.com",
    password: "$2b$10$REIK6MfkAX6ueQ/OFhv2k.fLUIcFAoRasObLXZtTCKN9.stKg6zUa",
  },
];

mongoose
  .connect("mongodb://127.0.0.1:27017/contacts")
  .catch((error) => console.log(error));

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await User.insertMany(users);
  await Contact.insertMany(contacts);
};

seedDB()
  .then(() => {
    mongoose.connection.close();
    console.log("Writing to DB seccesful, DB disconnected");
  })
  .catch((error) => {
    console.log("Error while writing to DB");
    console.log(error);
  });
