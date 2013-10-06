(function(){

  $(function(){
    var data = [["Benchmark File","Input","MRI 1.9.3","MRI 2.0.0","MRI 2.1.0dev","jruby-1.7.4","rbx-2.0.0"],["macro/bm_gzip.rb","100","5.109057","5.104959","5.103447","6.377","5.72474"],["macro/bm_hilbert_matrix.rb","10","0.002159","0.002006","0.002128","0.072","0.019948"],["macro/bm_hilbert_matrix.rb","20","0.027779","0.025889","0.03115","0.082","0.080648"],["macro/bm_hilbert_matrix.rb","30","0.127302","0.121795","0.149626","0.191","0.23058"],["macro/bm_hilbert_matrix.rb","40","0.410604","0.381802","0.440406","0.41","0.856457"],["macro/bm_hilbert_matrix.rb","50","0.907336","1.02611","1.125088","0.73","2.559132"],["macro/bm_hilbert_matrix.rb","60","2.12228","2.464741","2.440494","1.374","6.352273"],["macro/bm_mpart.rb","300","0.125688","0.113293","0.113094","0.401","0.27827999999999997"],["macro/bm_norvig_spelling.rb","50","4.1356","4.163615","4.149247","2.797","8.158445"],["macro/bm_parse_log.rb","100","0.508587","0.566102","0.560042","0.348","0.60592"],["macro/bm_rcs.rb","100","0.281587","0.205692","0.194071","0.215","0.399866"],["macro/bm_sudoku.rb","1","1.593824","1.79771","1.617281","2.162","2.295785"],["micro/bm_app_factorial.rb","5000","0.016754","0.015916","0.012454","SystemStackError","SystemStackError"],["micro/bm_app_fib.rb","30","0.176986","0.175371","0.160476","0.048","0.039507"],["micro/bm_app_fib.rb","35","1.96835","1.950377","1.772354","0.537","0.44353099999999995"],["micro/bm_app_mandelbrot.rb","1","0.238325","0.181361","0.220196","0.105","0.14455099999999999"],["micro/bm_app_pentomino.rb","1","22.042685","23.682177","22.917805","25.151","30.265992"],["micro/bm_app_tak.rb","7","0.135783","0.139992","0.126904","0.094","0.049325999999999995"],["micro/bm_app_tak.rb","8","0.397701","0.401775","0.366619","0.28","0.14206600000000003"],["micro/bm_app_tak.rb","9","1.033051","1.061262","0.962803","0.706","0.379815"],["micro/bm_app_tarai.rb","3","0.463235","0.499676","0.434818","0.334","0.161015"],["micro/bm_app_tarai.rb","4","0.560402","0.599873","0.529953","0.403","0.195507"],["micro/bm_app_tarai.rb","5","0.668665","0.723773","0.63897","0.48","0.236728"],["micro/bm_binary_trees.rb","1","9.182885","9.428705","9.862611","4.775","7.684237"],["micro/bm_cal.rb","500","0.047227","0.049425","0.049914","0.366","0.38183"],["micro/bm_count_multithreaded.rb","1","0.005267","0.005189","0.005413","0.007","0.001949"],["micro/bm_count_multithreaded.rb","2","0.01044","0.010471","0.011105","0.009","0.002033"],["micro/bm_count_multithreaded.rb","4","0.020324","0.021424","0.021594","0.014","0.005141"],["micro/bm_count_multithreaded.rb","8","0.043974","0.043954","0.048571","0.023","0.008579"],["micro/bm_count_multithreaded.rb","16","0.095841","0.095974","0.093919","0.028","0.017421"],["micro/bm_count_shared_thread.rb","1","0.0502","0.050026","0.052267","0.054","0.016658"],["micro/bm_count_shared_thread.rb","2","0.053162","0.052976","0.055364","0.035","0.008967"],["micro/bm_count_shared_thread.rb","4","0.054265","0.053976","0.055196","0.034","0.00896"],["micro/bm_count_shared_thread.rb","8","0.056671","0.054181","0.059954","0.015","0.010952"],["micro/bm_count_shared_thread.rb","16","0.05107","0.054593","0.053923","0.02","0.011170999999999999"],["micro/bm_dirp.rb","10000","1.420155","1.399948","1.396824","3.517","0.710372"],["micro/bm_eval.rb","1000000","5.751404","6.583449","6.213688","2.369","22.116337"],["micro/bm_fannkuch.rb","6","0.001787","0.001733","0.001564","0.027","0.004894"],["micro/bm_fannkuch.rb","8","0.13029","0.134647","0.134142","0.235","0.069474"],["micro/bm_fannkuch.rb","10","17.171523","17.368768","16.862062","23.166","9.105891"],["micro/bm_fasta.rb","1000000","9.557745","9.380629","9.230986","5.895","11.090432"],["micro/bm_fiber_ring.rb","10","0.000269","0.000346","0.000288","0.014","0.00042699999999999997"],["micro/bm_fiber_ring.rb","100","0.012568","0.012652","0.012169","0.167","0.016753"],["micro/bm_fiber_ring.rb","1000","1.436592","1.557982","1.564147","OutOfMemoryError","2.249246"],["micro/bm_fractal.rb","5","1.0949","0.66915","0.616548","0.272","0.24197000000000002"],["micro/bm_gc_array.rb","1","36.500938","34.151408","7.547874","2.782","4.193109"],["micro/bm_gc_mb.rb","500000","0.129273","0.132567","0.118393","0.218","0.333326"],["micro/bm_gc_mb.rb","1000000","0.233822","0.292925","0.238635","0.481","0.506124"],["micro/bm_gc_mb.rb","3000000","0.704656","0.810115","0.730495","Timeout","1.926233"],["micro/bm_gc_string.rb","1","2.718713","2.860871","2.946007","2.159","2.215246"],["micro/bm_knucleotide.rb","1","0.566178","0.551026","0.568202","0.517","0.943705"],["micro/bm_list.rb","1000","0.021443","0.024076","0.025971","0.074","0.037153"],["micro/bm_list.rb","10000","1.530868","2.00773","0.773114","0.846","2.387083"],["micro/bm_lucas_lehmer.rb","9689","2.654994","2.683382","1.554828","2.526","1.936771"],["micro/bm_lucas_lehmer.rb","9941","2.84945","2.887973","1.654811","2.703","2.084995"],["micro/bm_lucas_lehmer.rb","11213","4.001751","4.028356","2.277716","3.797","2.845783"],["micro/bm_lucas_lehmer.rb","19937","22.000346","22.125874","10.379813","20.39","13.730582"],["micro/bm_mandelbrot.rb","1","12.954963","8.596079","8.033197","15.368","6.807876"],["micro/bm_mbari_bogus1.rb","1","0.025682","0.018579","0.018916","SystemStackError","0.035824"],["micro/bm_mergesort.rb","1","0.586933","0.539087","0.509056","0.349","0.5289969999999999"],["micro/bm_mergesort_hongli.rb","3000","0.871251","0.826634","0.753304","0.93","0.702269"],["micro/bm_meteor_contest.rb","1","4.296023","4.956255","3.519749","3.952","7.932365"],["micro/bm_monte_carlo_pi.rb","10000000","4.162097","2.900988","2.655816","2.422","1.866777"],["micro/bm_nbody.rb","100000","2.119263","1.048547","0.945076","0.778","0.685055"],["micro/bm_nsieve.rb","9","2.576362","2.659447","2.260492","3.126","1.297365"],["micro/bm_nsieve_bits.rb","8","1.67415","SignalException","SignalException","Timeout","0.610231"],["micro/bm_observ.rb","100000","0.371977","0.244348","0.271411","0.126","0.163233"],["micro/bm_open_many_files.rb","50000","0.428341","0.459092","0.490723","1.583","1.963376"],["micro/bm_partial_sums.rb","2500000","5.04697","2.61634","2.452097","6.221","2.660421"],["micro/bm_pathname.rb","100","SignalException","45.750759","42.949342","28.078","SignalException"],["micro/bm_pi.rb","1000","0.022495","0.022117","0.016137","0.051","0.021483"],["micro/bm_pi.rb","10000","0.945141","1.086147","0.701473","1.339","0.906466"],["micro/bm_primes.rb","3000","0.01074","0.009747","0.001209","0.161","0.024815999999999998"],["micro/bm_primes.rb","30000","0.109674","0.102328","0.011509","0.169","0.11136"],["micro/bm_primes.rb","300000","1.344994","1.152594","0.11663","1.516","1.030403"],["micro/bm_primes.rb","3000000","SignalException","SignalException","1.121547","Timeout","SignalException"],["micro/bm_quicksort.rb","1","1.110974","1.243039","1.077159","0.856","1.37542"],["micro/bm_read_large.rb","100","1.541451","1.939848","1.543185","3.017","Terminated"],["micro/bm_regex_dna.rb","20","2.832831","2.130078","2.133038","3.39","1.846087"],["micro/bm_reverse_compliment.rb","1","3.454723","3.696532","2.34402","6.814","SignalException"],["micro/bm_simple_connect.rb","1","0.000171","0.000212","0.000161","0.002","0.000788"],["micro/bm_simple_connect.rb","100","0.006601","0.007459","0.007432","0.049","0.019267"],["micro/bm_simple_connect.rb","500","0.046109","0.053962","0.050303","0.24","0.11707899999999999"],["micro/bm_simple_server.rb","1","0.000845","0.000584","0.000551","0.002","0.0013499999999999999"],["micro/bm_simple_server.rb","100","0.001927","0.002127","0.001874","0.008","0.00275"],["micro/bm_simple_server.rb","100000","1.117024","1.307015","1.251707","1.185","1.248234"],["micro/bm_so_ackermann.rb","7","0.052351","0.056713","0.051344","0.027","0.014976999999999999"],["micro/bm_so_ackermann.rb","9","0.848756","0.936212","0.837895","0.377","0.25870299999999996"],["micro/bm_so_array.rb","9000","1.555967","1.432664","1.337048","1.153","1.054532"],["micro/bm_so_count_words.rb","100","2.419008","2.484345","2.545992","4.117","SignalException"],["micro/bm_so_exception.rb","500000","6.592959","1.031116","1.049802","Timeout","1.176855"],["micro/bm_so_lists.rb","1000","3.671372","2.971239","2.90842","1.114","3.447139"],["micro/bm_so_lists_small.rb","1000","0.746353","0.642062","0.65862","0.367","0.663512"],["micro/bm_so_matrix.rb","60","0.444335","0.406503","0.39951","0.326","0.11152899999999999"],["micro/bm_so_object.rb","500000","0.410916","0.36306","0.406211","0.227","0.0708"],["micro/bm_so_object.rb","1000000","0.818063","0.708907","0.7894","0.405","0.139673"],["micro/bm_so_object.rb","1500000","1.237178","1.069012","1.189358","0.521","0.20954399999999998"],["micro/bm_so_sieve.rb","4000","7.296232","7.060845","6.085063","8.389","3.182233"],["micro/bm_socket_transfer_1mb.rb","10000","0.5254","0.502119","0.490122","0.195","0.152552"],["micro/bm_socket_transfer_1mb.rb","1000000","0.515925","0.506529","0.488794","0.178","0.148941"],["micro/bm_socket_transfer_1mb_noblock.rb","10000","0.445874","0.440935","0.444167","0.18","0.155163"],["micro/bm_socket_transfer_1mb_noblock.rb","1000000","0.436781","0.446575","0.456988","0.16","0.158629"],["micro/bm_spectral_norm.rb","100","0.134283","0.114203","0.096852","0.24","0.078604"],["micro/bm_string_concat.rb","10000000","1.346049","1.440544","1.513953","OutOfMemoryError","1.4151630000000002"],["micro/bm_sum_file.rb","100","2.563346","2.671133","2.49079","3.903","Terminated"],["micro/bm_word_anagrams.rb","1","2.514917","2.631225","2.507226","1.324","5.638788"],["micro/bm_write_large.rb","100","0.389421","0.393267","0.393875","0.441","0.41820199999999996"],["rdoc/bm_rdoc_against_itself_darkfish.rb","1","5.713728","6.523168","SystemExit","SystemExit","5.054438"],["rdoc/bm_rdoc_against_itself_ri.rb","1","5.263898","4.973503","SystemExit","Terminated","5.911495"]]

    header = data.shift();

    var $mriPlaceholder = $('#table-ruby-mri-benchmark-placeholder');
    var $allPlaceholder = $('#table-ruby-all-benchmark-placeholder');

    html = "";

    html += '<table class="compact benchmark">'
      html += '<thead>'
        html += '<tr>'
          header.slice(0, 5).forEach(function(e){
            html += '<th>' + e + '</th>'
          });
        html += '</tr>'
      html += '</thead>'

      scoreboard = [
        0,
        0,
        0, // number of times ruby 1.9.3 win
        0, // number of times ruby 2.0.0 win
        0  // number of times ruby 2.1.0dev win
      ]

      totalTime = [
        0,
        0,
        0, // number of times ruby 1.9.3 win
        0, // number of times ruby 2.0.0 win
        0  // number of times ruby 2.1.0dev win
      ]

      html += '<tbody>'
        data.forEach(function(row){
          onlyMriRow = row.slice(0, 5)
          html += '<tr>'
            onlyMriRow.forEach(function(cell, index, array){
              var cellClass = '';

              if (index >= 2){
                var parsedValue = parseFloat(cell);
                var valuesArray = array.slice(2, 5)
                var parsedArray = valuesArray
                  .map(function(e){ return parseFloat(e) })
                  .filter(function(e){ return !!e; })
                var allValuesAreCorrect = parsedArray.length == valuesArray.length;

                cellClass += 'value '

                if (!parsedValue){
                  cellClass += 'wrong '
                } else {
                  cell = parsedValue.toFixed(6)
                  if (allValuesAreCorrect){ totalTime[index] += parsedValue }
                  var isMaxValue = Math.max.apply(null, parsedArray) == parsedValue;
                  if (isMaxValue){
                    cellClass += 'slowest '
                  } else {
                    var isMinValue = Math.min.apply(null, parsedArray) == parsedValue;
                    if (isMinValue){
                      cellClass += 'fastest '
                      scoreboard[index] += 1
                    }
                  }
                }
              }

              html += '<td class="'+cellClass+'">'
              html += cell + '</td>'
              html += '</td>'
            });
          html += '</tr>'
        });
      html += '</tbody>'
      html += '<tfoot>'
        html += '<tr>'
          html += '<td colspan="2"><strong>Victories</strong></td>'
          scoreboard.slice(2,5).forEach(function(e, index, ary){
            var htmlClass = '';
            var isMaxValue = Math.max.apply(null, ary) == e;
            if (isMaxValue){
              htmlClass += 'fastest'
            } else {
              var isMinValue = Math.min.apply(null, ary) == e;
              if (isMinValue){ htmlClass += 'slowest'}
            }
            html += '<td class="'+htmlClass+'">'+e+'</td>'
          });
        html += '</tr>'
        html += '<tr>'
          html += '<td colspan="2"><strong>Total time</strong></td>'
          totalTime.slice(2,5).forEach(function(e, index, ary){
            var htmlClass = '';
            var isMaxValue = Math.max.apply(null, ary) == e;
            if (isMaxValue){
              htmlClass += 'slowest'
            } else {
              var isMinValue = Math.min.apply(null, ary) == e;
              if (isMinValue){ htmlClass += 'fastest'}
            }
            html += '<td class="'+htmlClass+'">'+e.toFixed(6)+'</td>'
          });
        html += '</tr>'

      html += '</tfoot>'
    html += '</table>'

    $mriPlaceholder.replaceWith(html);

    html = "";

    html += '<table class="compact benchmark">'
      html += '<thead>'
        html += '<tr>'
          header.forEach(function(e){
            html += '<th>' + e + '</th>'
          });
        html += '</tr>'
      html += '</thead>'

      scoreboard = [
        0,
        0,
        0, // number of times ruby 1.9.3 win
        0, // number of times ruby 2.0.0 win
        0, // number of times ruby 2.1.0dev win
        0, // number of times jruby 1.7.4
        0  // number of times rbx-2.0.0
      ]

      totalTime = [
        0,
        0,
        0, // total time of ruby 1.9.3 win
        0, // total time of ruby 2.0.0 win
        0, // total time of ruby 2.1.0dev win
        0, // total time of jruby 1.7.4
        0  // total time of rbx-2.0.0
      ]

      html += '<tbody>'
        data.forEach(function(row){
          html += '<tr>'
            row.forEach(function(cell, index, array){
              var cellClass = '';

              if (index >= 2){
                var parsedValue = parseFloat(cell);
                var valuesArray = array.slice(2, array.length)
                var parsedArray = valuesArray
                  .map(function(e){ return parseFloat(e) })
                  .filter(function(e){ return !!e; })
                var allValuesAreCorrect = parsedArray.length == valuesArray.length;

                cellClass += 'value '

                if (!parsedValue){
                  cellClass += 'wrong '
                } else {
                  cell = parsedValue.toFixed(6)
                  if (allValuesAreCorrect){ totalTime[index] += parsedValue }
                  var isMaxValue = Math.max.apply(null, parsedArray) == parsedValue;
                  if (isMaxValue){
                    cellClass += 'slowest '
                  } else {
                    var isMinValue = Math.min.apply(null, parsedArray) == parsedValue;
                    if (isMinValue){
                      cellClass += 'fastest '
                      scoreboard[index] += 1
                    }
                  }
                }
              }

              html += '<td class="'+cellClass+'">'
              html += cell + '</td>'
              html += '</td>'
            });
          html += '</tr>'
        });
      html += '</tbody>'
      html += '<tfoot>'
        html += '<tr>'
          html += '<td colspan="2"><strong>Victories</strong></td>'
          scoreboard.slice(2,scoreboard.length).forEach(function(e, index, ary){
            var htmlClass = '';
            var isMaxValue = Math.max.apply(null, ary) == e;
            if (isMaxValue){
              htmlClass += 'fastest'
            } else {
              var isMinValue = Math.min.apply(null, ary) == e;
              if (isMinValue){ htmlClass += 'slowest'}
            }
            html += '<td class="'+htmlClass+'">'+e+'</td>'
          });
        html += '</tr>'
        html += '<tr>'
          html += '<td colspan="2"><strong>Total time</strong></td>'
          totalTime.slice(2,totalTime.length).forEach(function(e, index, ary){
            var htmlClass = '';
            var isMaxValue = Math.max.apply(null, ary) == e;
            if (isMaxValue){
              htmlClass += 'slowest'
            } else {
              var isMinValue = Math.min.apply(null, ary) == e;
              if (isMinValue){ htmlClass += 'fastest'}
            }
            html += '<td class="'+htmlClass+'">'+e.toFixed(6)+'</td>'
          });
        html += '</tr>'

      html += '</tfoot>'
    html += '</table>'

    $allPlaceholder.replaceWith(html);
  })
})()
