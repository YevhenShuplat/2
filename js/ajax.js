    		    var xhr = new XMLHttpRequest();

            xhr.onload = function() {

                if(xhr.status === 200) {
                    responseObject = JSON.parse(xhr.responseText);

                    var newContent = '';
                    

                    for (var i = 0; i < responseObject.events.length; i++) {
                        newContent += '<div class="acticle">';
                        newContent += '<div class="acticle-img"> <img src="img/' + responseObject.events[i].img + '"></div>';
                        newContent += '<div id="description"><div id="date">' +  responseObject.events[i].date + '</div>';
                        newContent += '<h2>' +  responseObject.events[i].title + '</h2>';
                        newContent += '<div class="box"><p>' + responseObject.events[i].description + '</p></div>';
                        newContent += '<div class="acticle-video"> <img src="img/' + responseObject.events[i].img + '"></div>';
                        newContent += '</div>';
                        
                        
                    }

                    document.getElementById('news').innerHTML = newContent;
                    
                    
                }
            };

            xhr.open('GET', 'data/data.json', true);
            xhr.send(null);