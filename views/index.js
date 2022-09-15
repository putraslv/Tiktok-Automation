const puppeteer = require('puppeteer-extra'), readlineSync = require('readline-sync'), delay = require('delay'), StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer['use'](StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer['use'](AdblockerPlugin({ 'blockTrackers': !![] })), ((async () => {
    console['log']('\x0aWelcome\x20to\x20tiktok\x20views\x20bot');
    let _0x3099cd = 0x1;
    if (_0x3099cd > 0x1)
        console['log']('Wrong\x20menu');
    else {
        let _0x167f33 = readlineSync['question']('Enter\x20tiktok\x20url\x20:\x20');
        const _0x3c0b03 = {
                'waitUntil': 'domcontentloaded',
                'timeout': 0x1388
            }, _0x4f0939 = await puppeteer['launch']({
                'headless': ![],
                'ignoreHTTPSErrors': !![],
                'slowMo': 0x0,
                'args': [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-cache',
                    '--disable-application-cache',
                    '--disk-cache-size=0',
                    '--disable-accelerated-2d-canvas',
                    '--disable-sync',
                    '--no-first-run',
                    '--no-zygote',
                    '--disable-gpu',
                    '--mute-audio'
                ]
            }), _0x13dda4 = await _0x4f0939['newPage'](), _0x3c2442 = _0x13dda4['waitForNavigation']();
        await _0x13dda4['goto']('https://zefoy.com/', _0x3c0b03), await _0x3c2442, readlineSync['question']('Please\x20check\x20the\x20captcha\x20and\x20press\x20enter\x20on\x20here\x20to\x20continue...'), await delay(0x1388);
        _0x3099cd == 0x1 && (await _0x13dda4['waitForSelector']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu4'), await _0x13dda4['click']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu4'));
        await delay(0x3e8), await _0x13dda4['waitForSelector']('#sid4\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x13dda4['click']('#sid4\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x13dda4['type']('#sid4\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control', _0x167f33);
        for (let _0xdef952 = 0x0; _0xdef952 < 0x3e8; _0xdef952++) {
            try {
                console['log']('\x0aRunning\x20proccess\x20-->\x20' + _0xdef952), await delay(0x3e8), await _0x13dda4['waitForSelector']('#sid4\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button', { 'timeout': 0x7530 }), await _0x13dda4['click']('#sid4\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button');
                try {
                    await _0x13dda4['waitForSelector']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9V\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button', { 'timeout': 0xbb8 });
                    let _0x25ddcd = await _0x13dda4['$']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9V\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), _0x2f81ee = await _0x13dda4['evaluate'](_0x27dcde => _0x27dcde['textContent'], _0x25ddcd);
                    console['log']('Total\x20content\x20views:\x20' + (_0x2f81ee ? _0x2f81ee['trim']() : 'Unknown')), await delay(0x1f4), await _0x13dda4['click']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9V\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), await delay(0x157c);
                } catch (_0x57224c) {
                    console['log']('Waiting\x20for\x20next\x20submit\x20-\x20(Cooldown)');
                }
                await _0x13dda4['waitForSelector']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9V\x20>\x20h4', { 'timeout': 0x2710 });
                let _0x2c6f13 = await _0x13dda4['$']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9V\x20>\x20h4'), _0x28ae16 = await _0x13dda4['evaluate'](_0x3b5f71 => _0x3b5f71['textContent'], _0x2c6f13);
                console['log'](_0x28ae16 ? _0x28ae16 : 'Unknown');
                if (_0x28ae16['trim']() == 'Checking\x20Timer...')
                    console['log']('Please\x20wait\x20130\x20seconds...'), await delay(0x1fbd0);
                else {
                    let _0x3c8feb = _0x28ae16['trim']()['match'](/(\d+)/g), _0x1c4eb6 = _0x3c8feb[0x0] * 0x3c + _0x3c8feb[0x1] * 0x1;
                    console['log']('Please\x20wait\x20' + _0x1c4eb6 + '\x20seconds...'), await delay(_0x1c4eb6 * 0x3e8);
                }
            } catch (_0x58a6de) {
                console['log'](_0x58a6de), await _0x4f0939['close']();
            }
        }
    }
})());