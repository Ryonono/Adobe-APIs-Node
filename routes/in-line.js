var express = require('express');
const fs = require('fs');
var router = express.Router();

// Include Express, a Node module that enables a web application backend.

// create an endpoint that handles GET requests for a specific whitepaper ID and renders the in-line.ejs view

router.all('/:id', function (req, res, next) {
  let rawdata = fs.readFileSync('data/data.json');
  let papers = JSON.parse(rawdata);
  let paper = papers.filter(p => p.id == parseInt(req.params.id))[0];

  let authenticated = false;
  res.render('in-line', {
    title: paper.title,
    paper: paper,
    authenticated: authenticated,
    permissions: {
      // 下記の記述で、PDFのダウンロードやプリントを不可能にすることができる（authenticationがfalseに設定されていることも重要だと思う）
      // 逆にtrueだと、誰でもPDFをダウンロードすることができる
      showDownloadPDF: false,
      showPrintPDF: false,
      showFullScreen: false
    }
  });
  // res.render('in-line', { title: paper.title, paper: paper });
});
module.exports = router;