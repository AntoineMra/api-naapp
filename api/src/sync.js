module.exports = () => {
    //const User = require("./models/User");

    //User.hasOne(Car);  
  
    const syncDatabase = async () => {
      try {
        //await User.sync();
        console.log("[DATABASE] - Synced database.");
      } catch (error) {
        console.error("[DATABASE] - Unable to sync database:", error);
      }
    };
    syncDatabase();
  };