/* eslint-disable */

const fs = require('fs')
// import fs from 'fs'

export default function Portfolio (name) {
        this.name = name;
        this.tokens = [];

        this.tokens.push( new Token('ETH',1.3,400) );
        this.tokens.push( new Token('CL',1475,306) );

        this.rawdata = fs.readFile('/TTPortfolio_MyPortfolio.json');  
        this.student = JSON.parse(rawdata);  
        
        console.log('Portfolio created!');
    }

function Token (currencyin,amountin,basisin) {
        this.currency = currencyin;
        this.amount = amountin;
        this.basis = basisin;
        this.currentPrice = 0;
        this.value = 0;
        this.tokenBasis = 0;
        this.gain = 0;
        this.percentGain = 0;
    }

Token.prototype.getToken = function () { return this.currency; };
