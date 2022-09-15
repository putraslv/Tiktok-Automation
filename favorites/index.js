const puppeteer = require('puppeteer-extra'), readlineSync = require('readline-sync'), delay = require('delay'), StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer['use'](StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer['use'](AdblockerPlugin({ 'blockTrackers': !![] })), ((async () => {
    console['log']('\x0aWelcome\x20to\x20tiktok\x20Favorite\x20bot');
    let _0x4b1bbc = 0x1;
    if (_0x4b1bbc > 0x3)
        console['log']('Wrong\x20menu');
    else {
        let _0x5bc960 = readlineSync['question']('Enter\x20tiktok\x20url\x20:\x20');
        const _0x5a9bb6 = {
                'waitUntil': 'domcontentloaded',
                'timeout': 0x1388
            }, _0x4b3710 = await puppeteer['launch']({
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
            }), _0x1cd3e5 = await _0x4b3710['newPage'](), _0x9802a4 = _0x1cd3e5['waitForNavigation']();
        await _0x1cd3e5['goto']('https://zefoy.com/', _0x5a9bb6), await _0x9802a4, readlineSync['question']('Please\x20check\x20the\x20captcha\x20and\x20press\x20enter\x20on\x20here\x20to\x20continue...'), await delay(0x1388);
        _0x4b1bbc == 0x1 && (await _0x1cd3e5['waitForSelector']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu8'), await _0x1cd3e5['click']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu8'));
        await delay(0x3e8), await _0x1cd3e5['waitForSelector']('#sid8\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x1cd3e5['click']('#sid8\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x1cd3e5['type']('#sid8\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control', _0x5bc960);
        for (let _0x4b80f6 = 0x0; _0x4b80f6 < 0x3e8; _0x4b80f6++) {
            try {
                console['log']('\x0aRunning\x20proccess\x20-->\x20' + _0x4b80f6), await delay(0x3e8), await _0x1cd3e5['waitForSelector']('#sid8\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button', { 'timeout': 0x7530 }), await _0x1cd3e5['click']('#sid8\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button');
                try {
                    await _0x1cd3e5['waitForSelector']('#c2VuZF9mb2xsb3dlcnNfdGlrdG9L\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button', { 'timeout': 0xbb8 });
                    let _0x169663 = await _0x1cd3e5['$']('#c2VuZF9mb2xsb3dlcnNfdGlrdG9L\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), _0x489434 = await _0x1cd3e5['evaluate'](_0x100f62 => _0x100f62['textContent'], _0x169663);
                    console['log']('Total\x20content\x20favorites:\x20' + (_0x489434 ? _0x489434['trim']() : 'Unknown')), await delay(0x1f4), await _0x1cd3e5['click']('#c2VuZF9mb2xsb3dlcnNfdGlrdG9L\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), await delay(0x157c);
                } catch (_0x45e9e5) {
                    console['log']('Waiting\x20for\x20next\x20submit\x20-\x20(Cooldown)');
                }
                await _0x1cd3e5['waitForSelector']('#c2VuZF9mb2xsb3dlcnNfdGlrdG9L\x20>\x20h4', { 'timeout': 0x2710 });
                let _0xe4516d = await _0x1cd3e5['$']('#c2VuZF9mb2xsb3dlcnNfdGlrdG9L\x20>\x20h4'), _0x201bfb = await _0x1cd3e5['evaluate'](_0x2b4921 => _0x2b4921['textContent'], _0xe4516d);
                console['log'](_0x201bfb ? _0x201bfb : 'Unknown');
                if (_0x201bfb['trim']() == 'Checking\x20Timer...')
                    console['log']('Please\x20wait\x20130\x20seconds...'), await delay(0x1fbd0);
                else {
                    let _0x58e758 = _0x201bfb['trim']()['match'](/(\d+)/g), _0x27c3a9 = _0x58e758[0x0] * 0x3c + _0x58e758[0x1] * 0x1;
                    console['log']('Please\x20wait\x20' + _0x27c3a9 + '\x20seconds...'), await delay(_0x27c3a9 * 0x3e8);
                }
            } catch (_0x6fce92) {
                console['log'](_0x6fce92), await _0x4b3710['close']();
            }
        }
    }
})());