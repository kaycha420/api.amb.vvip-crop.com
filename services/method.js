const axios = require("./call.js");
// const { curly } = require('node-libcurl');
const fs = require('fs');
const { wrapper } = require("axios-cookiejar-support");
const { CookieJar, Cookie } = require("tough-cookie");
const CookieFileStore = require('tough-cookie-file-store').FileCookieStore;
const jar = new CookieJar(new CookieFileStore('./cookie.json'));
const client = wrapper(axios.create({
    jar: jar,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
}));


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function posts(path, payload) {
    const url = `${path}`;
    const mockIp = `${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1,255)}.${getRandom(1, 255)}`;

    return await client.post(url, payload, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'origin': 'http://ocean.isme99.com',
            "X-Forwarded-For": mockIp,
        },
        withCredentials: true,
        timeout: 15000,
    }).then((resp) => {

        return resp.data;
    });
}

async function gets(path) {

    const url = `${path}`;
    const mockIp = `${getRandom(1, 255)}.${getRandom(1, 255)}.${getRandom(1,255)}.${getRandom(1, 255)}`;
    return await client.get(`${url}`, {
            jar: jar,
            headers: {
                'origin': 'http://ocean.isme99.com',
                "X-Forwarded-For": mockIp,
            },
            withCredentials: true,
            timeout: 15000,
        })
        .then((resp) => {
            if (resp.data) {
                return resp.data;
            } else {
                return [];
            }
        });
}

async function info(path) {

    const url = `${path}`;
    return await client.get(`${url}`, {
            headers: {
                'origin': 'http://ocean.isme99.com',
            },
            withCredentials: true,
            timeout: 15000,
        })
        .then((resp) => {
            if (resp.data) {
                // console.log(jar);
                // jar.getCookies();
                return resp.data;
            } else {
                return [];
            }
        });
}

async function proxy(path) {

    const url = `${path}`;
    return await client.get(`url`, {
            headers: {
                // 'origin': 'http://ocean.isme99.com',
            },
            withCredentials: true,
            timeout: 15000,
        })
        .then((resp) => {
            if (resp.data) {
                // console.log(jar);
                // jar.getCookies();
                return resp.data;
            } else {
                return [];
            }
        });
}

module.exports = { posts, gets, info, proxy };