
module.exports = (robot) => {
  //just write hi or hello then will reply to you
    robot.hear(/hi|hello/i, (res) =>{
      res.send("Howdy!")
  })
  // joking word here with response you should write '@"bot name" open the [write any thing here] doors'
    robot.respond(/open the (.*) doors/i, (res) => {
      const doorType = res.match[1]
    
      if (doorType === 'pod bay') {
        res.reply('I’m afraid I can’t let you do that.')
        return
      }
    
      res.reply(`Opening ${doorType} doors`)
    })

  // here will bot respond to you random of below words
    const lulz = ['lol', 'rofl', 'lmao']
  
    robot.respond(`/${lulz.join('|')}/i`, (res) => {
      res.send(res.random(lulz))
    })
    
  
    const toDoList = {
      'morning': ['Drink Coffee ', 'Send Fuel forecast email ', 'write latter to stakeholder ', 'meeting with team '],
      'after noon': ['Lunch ', 'Call mama ', 'Send plant performance email '],
      'evening': ['Coffee time with family ', 'Write Code ', 'Review JS '],
      'night': ['Watch movie or play music ', 'Dinner ', 'write task for tomorrow ']
    }
  // just type @"bot name" my task morning || after noon || evening || night
    robot.respond(/my task (.*)/i, (res) => {
      toDo = res.match[1]
      res.send(`/${toDoList[toDo].join('|')}/`)
    })

    // here ask bot to play the music '@"bot name" play music'

    robot.respond(/play music/i, (res) => {
      res.send('What type of music you want')
   })

    const moodToday = {
      'sad': ['https://soundcloud.com/la7n-waffa/8yxxb77bc46m', 'https://soundcloud.com/amedahmed/ktscryys18xi', 'https://soundcloud.com/sahrano_m1/svf9rkjw1fkw', 'https://soundcloud.com/hammam-a/sets/ce1sera9bmik'],
      'cool': ['https://soundcloud.com/user-876658341/sets/sunday-music-and-hot-coffee', 'https://soundcloud.com/electrostepnetworkpremiere/roarin', 'https://soundcloud.com/coolmusicrecords/catzclaw-bounce-to-booty-out-now', 'https://soundcloud.com/yogi-piwahyuti/sets/arab-cool-songs', 'https://soundcloud.com/kareem-a-ahmed/sets/cool-arab', 'https://soundcloud.com/lynn-omara-362893302/sets/arab-cool'],
      'motivate': ['https://soundcloud.com/ahmed-naeem-524115490/arabic-workout-motivation-music', 'https://soundcloud.com/morninglightmusic/motivating'],
      'studing': ['https://soundcloud.com/mrmr-ashraf-194858734/sets/music-for-studing', 'https://soundcloud.com/mrmr-ashraf-194858734/sets/music-for-studing','https://youtu.be/BklGhQYKl30','https://youtu.be/_BUZ9Hsc9HQ']
    }

  // just type the type of music you want 'cool music'
    robot.hear(/(.*) music/i, (res) => {
      musicType = res.match[1]
      if(musicType == 'sad'){
        res.send(res.random(moodToday['sad']))
        return
      } 
      if(musicType == 'cool'){
        res.send(res.random(moodToday['cool']))
        return
      }
      if(musicType == 'motivate'){
        res.send(res.random(moodToday['motivate']))
        return
      }
      if(musicType == 'studing'){
        res.send(res.random(moodToday['studing']))
        return
      }
      })
    // here will robot will remind you the class on class day and before class starting and that
    // when you are active in chanel by typing any thing 
    var now = new Date();
    robot.hear(/(.*)/i, (res) => {
      if((now.getDay() == 1 || 3) && now.getHours() == (Math.floor(Math.random()*18))){
        res.send('REMINDER: YOU HAVE CLASS TODAY')
    }
  })
  }
