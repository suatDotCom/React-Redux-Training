const soundSettings = {
    shared: { volume: 1 }, // Shared sound settings
    players: {
      // The player settings
      click: {
        // With the name the player is created
        sound: { src: ["/sound/click.mp3"] } // The settings to pass to Howler
      },
      typing: {
        sound: { src: ["/sound/typing.mp3"] },
        settings: { oneAtATime: true } // The custom app settings
      },
      deploy: {
        sound: { src: ["/sound/deploy.mp3"] },
        settings: { oneAtATime: true }
      },
      alert: {
        sound: { src: ["/sound/error.mp3"] },
        settings: { oneAtATime: true }
      }
    }
  };

  
module.exports = soundSettings;
  