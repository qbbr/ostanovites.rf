new Vue({
    el: '#app',
    data: {
        thiefFaceImg: '/very-thief-face.jpeg',
        headerText: 'Остановитесь!1!',
        soundPath: '/ostanovites.mp3',
        fontSize: 28,
        fontSizeIncrement: 5,
        hellCounter: 0,
        hell: false
    },
    methods: {
        printConsoleHeader: function () {
            console.log(' %c!!! %c' + this.headerText + ' %c!!!', 'font-size: 3em; color: #550000;', 'font-size: 3em; color: #990000;', 'font-size: 3em; color: #330000;');
        },
        click: function () {
            this.fontSize += this.fontSizeIncrement;
            this.$refs.header.style.fontSize = this.fontSize + 'px';

            this.printConsoleHeader();
            this.playSound(this.soundPath);

            ++this.hellCounter;
            if (this.hellCounter > (6 + Math.floor(Math.random() * 6))) { // 6...
                this.hell = true;
            }
        },
        playSound: function (sound) {
            var audio = new Audio(sound);
            audio.pause();
            audio.currentTime = 0;
            audio.playbackRate = 0.85;
            audio.play();
        }
    },
    mounted: function () {
        this.printConsoleHeader();
    },
    template: [
        '<div>',
            '<h1 ref="header">{{ headerText }}</h1>',
            '<img class="face" :src="thiefFaceImg" :class="{ hell: hell }" @click="click">',
            '<h5>PEACE ✌️🕊🌷 NO WAR</h5>',
            '<h6>with ❤ by @qbbr</h6>',
        '</div>'
    ].join('\n')
});
