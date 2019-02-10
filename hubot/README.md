### ![enter image description here](https://i.imgur.com/rVEnLD0.png) Unit Project #1: Slackbot
### How to run bot on Slack
> use this link [# Slack Developer Kit for Hubot](http://slackapi.github.io/hubot-slack/).

May you facing problem during installation  `npm ERR! Refusing to install package with name "hubot" under a package` just open `package.json` and change tne `"name": "hubot"` to any name like `"name": "hubotvr"`

> Scripts for [hubot](https://github.com/github/hubot) are written with [CoffeeScript](http://jashkenas.github.com/coffee-script/).

### First code:
```sh
module.exports = (robot) => {
robot.hear(/hi|hello/i, (res) =>{
res.send("Howdy!")
})
```
The actual code starts on the module.exports line. Every script you make will start with that line.
```sh
module.exports = (robot) =>
```
The next line tells hubot to here to hi and hello.
```sh
robot.hear(/hi|hello/i, (res) =>{
```
with `hear` just write `hi` and bot will replay to you, no need to write `@'bot user' hi` that need it in `respond`
The `i` after the last slash tells the regular expression to not be case sensitive, so it will also match Hi and Hello.
### Second Code
```sh
robot.respond(/open the (.*) doors/i, (res) => {
      const doorType = res.match[1]
      if (doorType === 'pod bay') {
        res.reply('I’m afraid I can’t let you do that.')
        return
      }
       res.reply(`Opening ${doorType} doors`)
    })
```
Here  `doorType` take the word in `(.*)` by `.mach[1]`method then check by  `if` condition it is equal ***pod bay***
### Third Code
```sh
const lulz = ['lol', 'rofl', 'lmao']
    robot.respond(`/${lulz.join('|')}/i`, (res) => {
      res.send(res.random(lulz))
    })
```
A common pattern is to hear or respond to commands, and send with a ***Random*** funny image or line of text from an array of possibilities. It’s annoying to do this in JavaScript and CoffeeScript out of the box, so Hubot includes a convenience method

### Fourth Code
```sh
const toDoList = {
      'morning': ['Drink Coffee ', 'Send Fuel forecast email ', 'write latter to stakeholder ', 'meeting with team '],
      'after noon': ['Lunch ', 'Call mama ', 'Send plant performance email '],
      'evening': ['Coffee time with family ', 'Write Code ', 'Review JS '],
      'night': ['Watch movie or play music ', 'Dinner ', 'write task for tomorrow ']
    }
    robot.respond(/my task (.*)/i, (res) => {
      toDo = res.match[1]
      res.send(`/${toDoList[toDo].join('|')}/`)
    })
```
Here using object task for morning, after noon, evining or night.

### Fifth Code
```sh
robot.respond(/play music/i, (res) => {
      res.send('What type of music you want')
   })
    const moodToday = {
      'sad': ['https://soundcloud.com/la7n-waffa/8yxxb77bc46m', 'https://soundcloud.com/amedahmed/ktscryys18xi', 'https://soundcloud.com/sahrano_m1/svf9rkjw1fkw', 'https://soundcloud.com/hammam-a/sets/ce1sera9bmik'],
      'cool': ['https://soundcloud.com/user-876658341/sets/sunday-music-and-hot-coffee', 'https://soundcloud.com/electrostepnetworkpremiere/roarin', 'https://soundcloud.com/coolmusicrecords/catzclaw-bounce-to-booty-out-now', 'https://soundcloud.com/yogi-piwahyuti/sets/arab-cool-songs', 'https://soundcloud.com/kareem-a-ahmed/sets/cool-arab', 'https://soundcloud.com/lynn-omara-362893302/sets/arab-cool'],
      'motivate': ['https://soundcloud.com/ahmed-naeem-524115490/arabic-workout-motivation-music', 'https://soundcloud.com/morninglightmusic/motivating'],
      'studing': ['https://soundcloud.com/mrmr-ashraf-194858734/sets/music-for-studing', 'https://soundcloud.com/mrmr-ashraf-194858734/sets/music-for-studing','https://youtu.be/BklGhQYKl30','https://youtu.be/_BUZ9Hsc9HQ']
    }
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
```
This code select randomly music based on your mood.

### Sixth Code
```sh
 var now = new Date();
    robot.hear(/(.*)/i, (res) => {
        if((now.getDay() == 1 || 3) && now.getHours() == (Math.floor(Math.random()*18))){
            res.send('REMINDER: YOU HAVE CLASS TODAY')
        }
    })
```
 here  robot will remind you the class on class day and before class starting and that when you are active in chanel by typing any thing.
`now.getHours() == (Math.floor(Math.random()*19))` this code randomly take # between 1-18 and compare it with ***current time*** by this avoid noising message [by repeating reminder message after each line type] and probability to get remind message is high.

### Sixth Code
```sh
robot.error((error, response) => {
        const message = `DOES NOT COMPUTE: ${error.toString()}`
        robot.logger.error(message)

        if (response) {
        response.reply(message)
        }
    })
```
***Error Handling*** No code is perfect, and errors and exceptions are to be expected. Previously, an uncaught exceptions would crash your hubot instance. Hubot now includes an uncaughtException handler, which provides hooks for scripts to do something about exceptions
