new Vue({
    el: '#app',
    data: {
        thiefFaceImg: '/thief-face.png',
        headerText: 'Остановитесь',
        myTelegramLink: 'https://t.me/imqbbr',
        soundPath: '/ostanovites.mp3',
        fontSize: 28,
        fontSizeIncrement: 5
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
        },
        playSound: function (sound) {
            var audio = new Audio(sound);
            audio.pause();
            audio.currentTime = 0;
            audio.playbackRate = 0.85;
            audio.play();
        },
    },
    mounted: function () {
        this.printConsoleHeader();
    },
    template: [
        '<div>',
            '<h1 ref="header">{{ headerText }}</h1>',
            '<img :src="thiefFaceImg" @click="click">',
            '<h6>created by <a :href="myTelegramLink">@qbbr</a></h6>',
        '</div>'
    ].join('\n')
});
