const db = require("../config/connection");
const { User,  Appointment } = require("../models");
//Specialty,
const userSeeds = require("./userSeeds.json");
const barberSeeds = require("./barberSeeds.json");
//const specialtySeeds = require("./specialtySeeds.json");
const appointmentSeeds = require("./appointmentSeeds.json");

db.once("open", async () => {
  try {
    await Appointment.deleteMany({});
    //await Specialty.deleteMany({});
    await User.deleteMany({});

    const createdUsers = await User.create(userSeeds);
    //const createdSpecialties = await Specialty.create(specialtySeeds);
    // const createdBarbers = await Barber.create(barberSeeds);

    for (let i = 0; i < appointmentSeeds.length; i++) {
      const {
        id,
        userId,
        userName,
        barberId,
        barberName,
        //specialty,
        date,
        time,
      } = appointmentSeeds[i];

      const user = createdUsers.find((user) => user.id === userId);
      // const barber = createdBarbers.find(
      //   (barber) => barber.userId === barberId
      // );
      //const specialtyObj = createdSpecialties.find(
       // (spec) => spec.name === specialty
      //);

      if (user ) {
        //specialtyObj
        await Appointment.create({
          id,
          user: user._id,
          userName,
          barberName,
          //specialty: specialtyObj._id,
          date,
          time,
        });
      }
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Seed data inserted successfully!");
  process.exit(0);
});
