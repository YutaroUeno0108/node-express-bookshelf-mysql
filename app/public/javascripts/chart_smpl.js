//グラフを描画するよ！
var graph = function() {
  var $wrapper = $('#canvas');
  var $canvas = $('#canvas canvas');

  //Retina対応
  var scale = 2.0; //Retinaで2倍
  var w = $wrapper.width() * scale;
  var h = $wrapper.height() * scale;
  $canvas.attr({'width': w, 'height': h});
  $canvas.width(w/scale); $canvas.height(h/scale);

  $canvas.clearCanvas(); //キャンパスをクリア

  //横に3本線を描きます
    var bc = '#999999';
    var bw = 0.5 * scale;
    var pd = 14.0 * scale;
    $canvas.drawLine({strokeStyle: bc, strokeWidth: bw,
            x1: pd, y1: h - pd,
            x2: w - pd, y2: h - pd,
    });
    $canvas.drawLine({strokeStyle: bc, strokeWidth: bw,
            x1: pd, y1: h / 2,
            x2: w - pd, y2: h / 2,
    });
    $canvas.drawLine({strokeStyle: bc, strokeWidth: bw,
            x1: pd, y1: pd,
            x2: w - pd, y2: pd,
    });

    //長方形をたくさん描きます
    var values = [3,4,7,10,15,13,21,17,15,14,18,19,24,30,38,49];
    var max = 50;
    for(var i = 0; i < values.length; i++) {
            var v = values[i];
            var x = (w - pd * 2) / (values.length + 1) * (i + 1) + pd;
            var y = (h - pd * 2) * (1 - v / max) + pd;

            var uw = (w - pd * 2) / (values.length + 1) - pd / 2;
            var p1 = {'x': x-uw/2, 'y': y};
            var p2 = {'x': x-uw/2, 'y': h - pd};
            var p3 = {'x': x+uw/2, 'y': h - pd};
            var p4 = {'x': x+uw/2, 'y': y};

            $canvas.drawLine({fillStyle: 'rgba(180, 180, 180, 0.5)', closed: true,
                    x1: p1.x, y1: p1.y,
                    x2: p2.x, y2: p2.y,
                    x3: p3.x, y3: p3.y,
                    x4: p4.x, y4: p4.y,
            });
    }

    //丸をたくさん描きます
      var values = [3,4,7,10,15,13,21,17,15,14,18,19,24,30,38,49];
      var max = 50;
      for(var i = 0; i < values.length; i++) {
              var v = values[i];
              var x = (w - pd * 2) / (values.length + 1) * (i + 1) + pd;
              var y = (h - pd * 2) * (1 - v / max) + pd;

              $canvas.drawEllipse({fillStyle: '#6c94b8', width: 6*scale, height: 6*scale,
                      x: x, y: y
              });
      }

      //また線を描きます
      var values = [3,4,7,10,15,13,21,17,15,14,18,19,24,30,38,49];
      var max = 50;
      var lineObj = {strokeStyle: '#6c94b8', strokeWidth: 1*scale, rounded: true};
      for(var i = 0; i < values.length; i++) {
              var v = values[i];
              var x = (w - pd * 2) / (values.length + 1) * (i + 1) + pd;
              var y = (h - pd * 2) * (1 - v / max) + pd;

              lineObj['x'+(i+1)] = x;
              lineObj['y'+(i+1)] = y;
      }
      $canvas.drawLine(lineObj);
};
