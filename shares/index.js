const puppeteer = require('puppeteer-extra'), readlineSync = require('readline-sync'), delay = require('delay'), StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer['use'](StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
puppeteer['use'](AdblockerPlugin({ 'blockTrackers': !![] })), ((async () => {
    console['log']('\x0aWelcome\x20to\x20tiktok\x20share\x20bot');
    let _0x2a5980 = 0x1;
    if (_0x2a5980 > 0x3)
        console['log']('Wrong\x20menu');
    else {
        let _0x56ad1a = readlineSync['question']('Enter\x20tiktok\x20url\x20:\x20');
        const _0x1d36f4 = {
                'waitUntil': 'domcontentloaded',
                'timeout': 0x1388
            }, _0x32e575 = await puppeteer['launch']({
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
            }), _0x2a1878 = await _0x32e575['newPage'](), _0x57f75f = _0x2a1878['waitForNavigation']();
        await _0x2a1878['goto']('https://zefoy.com/', _0x1d36f4), await _0x57f75f, readlineSync['question']('Please\x20check\x20the\x20captcha\x20and\x20press\x20enter\x20on\x20here\x20to\x20continue...'), await delay(0x1388);
        _0x2a5980 == 0x1 && (await _0x2a1878['waitForSelector']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu7'), await _0x2a1878['click']('.row\x20>\x20.col-sm-4\x20>\x20.card\x20>\x20.menu7'));
        await delay(0x3e8), await _0x2a1878['waitForSelector']('#sid7\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x2a1878['click']('#sid7\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control'), await _0x2a1878['type']('#sid7\x20>\x20.card\x20>\x20form\x20>\x20.input-group\x20>\x20.form-control', _0x56ad1a);
        for (let _0x1462b6 = 0x0; _0x1462b6 < 0x3e8; _0x1462b6++) {
            try {
                console['log']('\x0aRunning\x20proccess\x20-->\x20' + _0x1462b6), await delay(0x3e8), await _0x2a1878['waitForSelector']('#sid7\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button', { 'timeout': 0x7530 }), await _0x2a1878['click']('#sid7\x20>\x20div\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20button');
                try {
                    await _0x2a1878['waitForSelector']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9s\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button', { 'timeout': 0xbb8 });
                    let _0x166021 = await _0x2a1878['$']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9s\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), _0x1b6029 = await _0x2a1878['evaluate'](_0x16bc2e => _0x16bc2e['textContent'], _0x166021);
                    console['log']('Total\x20content\x20shares:\x20' + (_0x1b6029 ? _0x1b6029['trim']() : 'Unknown')), await delay(0x1f4), await _0x2a1878['click']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9s\x20>\x20div.row.text-light.d-flex.justify-content-center\x20>\x20div\x20>\x20form\x20>\x20button'), await delay(0x157c);
                } catch (_0x1bc322) {
                    console['log']('Waiting\x20for\x20next\x20submit\x20-\x20(Cooldown)');
                }
                await _0x2a1878['waitForSelector']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9s\x20>\x20h4', { 'timeout': 0x2710 });
                let _0x16aded = await _0x2a1878['$']('#c2VuZC9mb2xsb3dlcnNfdGlrdG9s\x20>\x20h4'), _0x25205d = await _0x2a1878['evaluate'](_0x1bc246 => _0x1bc246['textContent'], _0x16aded);
                console['log'](_0x25205d ? _0x25205d : 'Unknown');
                if (_0x25205d['trim']() == 'Checking\x20Timer...')
                    console['log']('Please\x20wait\x20130\x20seconds...'), await delay(0x1fbd0);
                else {
                    let _0x4e87e8 = _0x25205d['trim']()['match'](/(\d+)/g), _0x1dcc2d = _0x4e87e8[0x0] * 0x3c + _0x4e87e8[0x1] * 0x1;
                    console['log']('Please\x20wait\x20' + _0x1dcc2d + '\x20seconds...'), await delay(_0x1dcc2d * 0x3e8);
                }
            } catch (_0x16afdd) {
                console['log'](_0x16afdd), await _0x32e575['close']();
            }
        }
    }
})());