import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  allUsers = [
{"id":1,"first_name":"Anet","last_name":"Doe","email":"adoe0@comcast.net","gender":"Female","avatar":"https://robohash.org/sintessequaerat.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":2,"first_name":"Honoria","last_name":"","email":"hcaughte1@google.com.br","gender":"Female","avatar":"https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":3,"first_name":"Wiley","last_name":"Boarder","email":"wboarder2@xing.com","gender":"Male","avatar":"https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":4,"first_name":"Brett","last_name":"Ivetts","email":"bivetts3@netlog.com","gender":"Agender","avatar":"https://robohash.org/ullamsuntet.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":5,"first_name":"Horst","last_name":"Grastye","email":"hgrastye4@dmoz.org","gender":"Male","avatar":"https://robohash.org/utquirepudiandae.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":6,"first_name":"Monique","last_name":"Wil","email":"mwilbud5@state.gov","gender":"Female","avatar":"https://robohash.org/maximequiomnis.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":7,"first_name":"Kalindi","last_name":"Vinson","email":"kvinson6@g.co","gender":"Female","avatar":"https://robohash.org/occaecatinihilquos.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":8,"first_name":"Janos","last_name":"Le Noire","email":"jlenoire7@sakura.ne.jp","gender":"Male","avatar":"https://robohash.org/praesentiumquasicorporis.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":9,"first_name":"Corella","last_name":"Coniff","email":"cconiff8@guardian.co.uk","gender":"Bigender","avatar":"https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":10,"first_name":"Cecilia","last_name":"","email":"cwaldocke9@gmpg.org","gender":"Female","avatar":"https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":11,"first_name":"Suellen","last_name":"Bret","email":"sbrettona@mapquest.com","gender":"Female","avatar":"https://robohash.org/cupiditatemaioresaut.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":12,"first_name":"Deloris","last_name":"Evered","email":"deveredb@ovh.net","gender":"Female","avatar":"https://robohash.org/blanditiiscumqueimpedit.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":13,"first_name":"Candice","last_name":"Har","email":"charbarc@home.pl","gender":"Female","avatar":"https://robohash.org/autarchitectotenetur.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":14,"first_name":"John","last_name":"Fine","email":"jfined@facebook.com","gender":"Male","avatar":"https://robohash.org/etvoluptatemoccaecati.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":15,"first_name":"Gonzalo","last_name":"Tilard","email":"gtilliarde@marketwatch.com","gender":"Agender","avatar":"https://robohash.org/voluptatemfacilisodit.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":16,"first_name":"Hertha","last_name":"Sterrick","email":"hsterrickf@nationalgeographic.com","gender":"Female","avatar":"https://robohash.org/rerumoptiorepudiandae.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":17,"first_name":"Benjamin","last_name":"Challiner","email":"bchallinerg@nydailynews.com","gender":"Male","avatar":"https://robohash.org/architectoomnisquia.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":18,"first_name":"Lockwood","last_name":"Wermerling","email":"lwermerlingh@imgur.com","gender":"Male","avatar":"https://robohash.org/cumquenoncommodi.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":19,"first_name":"Baillie","last_name":"Mulqueeny","email":"bmulqueenyi@wikispaces.com","gender":"Male","avatar":"https://robohash.org/dolorumvelitquam.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":20,"first_name":"Quintus","last_name":"Gibbieson","email":"qgibbiesonj@symantec.com","gender":"Male","avatar":"https://robohash.org/delectusconsectetursed.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":21,"first_name":"Heinrik","last_name":"Brockbank","email":"hbrockbankk@plala.or.jp","gender":"Male","avatar":"https://robohash.org/eumdelectusducimus.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":22,"first_name":"Klara","last_name":"Lorking","email":"klorkingl@kickstarter.com","gender":"Female","avatar":"https://robohash.org/veniamenimlaborum.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":23,"first_name":"Lynelle","last_name":"Mawne","email":"lmawnem@nsw.gov.au","gender":"Female","avatar":"https://robohash.org/totamsuntrem.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":24,"first_name":"Colver","last_name":"Mc Harg","email":"cmchargn@google.co.uk","gender":"Male","avatar":"https://robohash.org/voluptasipsaquam.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":25,"first_name":"Tristam","last_name":"Morsley","email":"tmorsleyo@engadget.com","gender":"Male","avatar":"https://robohash.org/repellendusetvoluptatibus.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":26,"first_name":"Barnabe","last_name":"Cathrall","email":"bcathrallp@photobucket.com","gender":"Polygender","avatar":"https://robohash.org/atnonqui.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":27,"first_name":"Shauna","last_name":"Routham","email":"srouthamq@shutterfly.com","gender":"Female","avatar":"https://robohash.org/doloresolutasuscipit.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":28,"first_name":"Selena","last_name":"Mathewson","email":"smathewsonr@auda.org.au","gender":"Female","avatar":"https://robohash.org/recusandaevelut.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":29,"first_name":"Genny","last_name":"Kane","email":"gkanes@cocolog-nifty.com","gender":"Female","avatar":"https://robohash.org/exteneturrepudiandae.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":30,"first_name":"Iver","last_name":"Dansie","email":"idansiet@timesonline.co.uk","gender":"Male","avatar":"https://robohash.org/iddoloremquequidem.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":31,"first_name":"Raff","last_name":"Shearme","email":"rshearmeu@histats.com","gender":"Male","avatar":"https://robohash.org/doloresquidemet.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":32,"first_name":"Grantley","last_name":"Gillam","email":"ggillamv@bizjournals.com","gender":"Male","avatar":"https://robohash.org/earumminimaillo.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":33,"first_name":"Tamas","last_name":"Lerego","email":"tleregow@g.co","gender":"Male","avatar":"https://robohash.org/utenimnisi.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":34,"first_name":"Jacinda","last_name":"Giacobelli","email":"jgiacobellix@marriott.com","gender":"Female","avatar":"https://robohash.org/ullametvoluptas.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":35,"first_name":"Isadore","last_name":"Gorries","email":"igorriesy@ox.ac.uk","gender":"Non-binary","avatar":"https://robohash.org/etexercitationemeum.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":36,"first_name":"Giovanni","last_name":"Choak","email":"gchoakz@abc.net.au","gender":"Male","avatar":"https://robohash.org/autemeumautem.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":37,"first_name":"Miof mela","last_name":"Rummin","email":"mrummin10@usa.gov","gender":"Female","avatar":"https://robohash.org/voluptatemmaioreserror.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":38,"first_name":"Zora","last_name":"Kew","email":"zkew11@toplist.cz","gender":"Polygender","avatar":"https://robohash.org/utearumpossimus.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":39,"first_name":"Pansie","last_name":"Liffey","email":"pliffey12@free.fr","gender":"Female","avatar":"https://robohash.org/quodeseruntearum.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":40,"first_name":"Prentiss","last_name":"Dearing","email":"pdearing13@cam.ac.uk","gender":"Male","avatar":"https://robohash.org/laudantiumdoloreos.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":41,"first_name":"Chick","last_name":"Louth","email":"clouth14@mayoclinic.com","gender":"Male","avatar":"https://robohash.org/nihilsitest.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":42,"first_name":"Alva","last_name":"Goozee","email":"agoozee15@google.es","gender":"Male","avatar":"https://robohash.org/nonautofficiis.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":43,"first_name":"Fields","last_name":"Zucker","email":"fzucker16@ucsd.edu","gender":"Male","avatar":"https://robohash.org/quiainciduntconsequatur.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":44,"first_name":"Bren","last_name":"Dilke","email":"bdilke17@virginia.edu","gender":"Male","avatar":"https://robohash.org/recusandaererumblanditiis.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":45,"first_name":"Ernesta","last_name":"Parzizek","email":"eparzizek18@delicious.com","gender":"Female","avatar":"https://robohash.org/estharumdolor.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":46,"first_name":"Symon","last_name":"Paniman","email":"spaniman19@dion.ne.jp","gender":"Male","avatar":"https://robohash.org/consequaturharumdistinctio.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":47,"first_name":"Donny","last_name":"Dibson","email":"ddibson1a@fc2.com","gender":"Male","avatar":"https://robohash.org/doloresautemdolore.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":48,"first_name":"Nady","last_name":"Blondel","email":"nblondel1b@icq.com","gender":"Female","avatar":"https://robohash.org/placeatrepellataut.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":49,"first_name":"Sarina","last_name":"Picard","email":"spicard1c@t.co","gender":"Female","avatar":"https://robohash.org/voluptassitexplicabo.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":50,"first_name":"Lewie","last_name":"Szimon","email":"lszimon1d@constantcontact.com","gender":"Male","avatar":"https://robohash.org/etsapienteomnis.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":51,"first_name":"Ricardo","last_name":"Mulford","email":"rmulford1e@xinhuanet.com","gender":"Genderfluid","avatar":"https://robohash.org/dolorestemporibusaperiam.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":52,"first_name":"Herc","last_name":"Lancett","email":"hlancett1f@engadget.com","gender":"Male","avatar":"https://robohash.org/inventorenonnisi.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":53,"first_name":"Aldridge","last_name":"Echlin","email":"aechlin1g@apache.org","gender":"Male","avatar":"https://robohash.org/voluptasrationecorrupti.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":54,"first_name":"Harp","last_name":"Petz","email":"hpetz1h@discuz.net","gender":"Male","avatar":"https://robohash.org/distinctionumquamconsectetur.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":55,"first_name":"Gypsy","last_name":"Ledgeway","email":"gledgeway1i@washington.edu","gender":"Female","avatar":"https://robohash.org/quiautiste.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":56,"first_name":"Blithe","last_name":"Kingsland","email":"bkingsland1j@imdb.com","gender":"Female","avatar":"https://robohash.org/sedestsuscipit.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":57,"first_name":"Lynn","last_name":"Besque","email":"lbesque1k@about.me","gender":"Genderqueer","avatar":"https://robohash.org/teneturofficiaconsequuntur.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":58,"first_name":"Lothaire","last_name":"Olliffe","email":"lolliffe1l@sogou.com","gender":"Male","avatar":"https://robohash.org/aliquamporroomnis.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":59,"first_name":"Harmony","last_name":"Henzer","email":"hhenzer1m@surveymonkey.com","gender":"Female","avatar":"https://robohash.org/quaeaccusamusoccaecati.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":60,"first_name":"Robinett","last_name":"Oolahan","email":"roolahan1n@globo.com","gender":"Female","avatar":"https://robohash.org/estestquia.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":61,"first_name":"Perri","last_name":"Molines","email":"pmolines1o@dell.com","gender":"Female","avatar":"https://robohash.org/odioculpaaccusamus.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":62,"first_name":"Donia","last_name":"Fonso","email":"dfonso1p@youku.com","gender":"Female","avatar":"https://robohash.org/fugaetdelectus.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":63,"first_name":"Hiram","last_name":"Entwistle","email":"hentwistle1q@ebay.com","gender":"Male","avatar":"https://robohash.org/laboriosamomnisodit.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":64,"first_name":"Dasie","last_name":"French","email":"dfrench1r@oakley.com","gender":"Female","avatar":"https://robohash.org/namtemporatempore.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":65,"first_name":"Terencio","last_name":"Strephan","email":"tstrephan1s@adobe.com","gender":"Male","avatar":"https://robohash.org/idutcorporis.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":66,"first_name":"Miquela","last_name":"Wybern","email":"mwybern1t@examiner.com","gender":"Female","avatar":"https://robohash.org/vitaesedipsam.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":67,"first_name":"Wald","last_name":"McKinless","email":"wmckinless1u@stanford.edu","gender":"Male","avatar":"https://robohash.org/sintquiveritatis.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":68,"first_name":"Giordano","last_name":"Heddan","email":"gheddan1v@t.co","gender":"Male","avatar":"https://robohash.org/nostrumsintatque.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":69,"first_name":"Dominic","last_name":"Lumm","email":"dlumm1w@ifeng.com","gender":"Male","avatar":"https://robohash.org/iddolorequis.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":70,"first_name":"Connie","last_name":"Andreev","email":"candreev1x@omniture.com","gender":"Female","avatar":"https://robohash.org/distinctioauteum.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":71,"first_name":"Hedwiga","last_name":"Lumbers","email":"hlumbers1y@redcross.org","gender":"Female","avatar":"https://robohash.org/maximeestnatus.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":72,"first_name":"Petronella","last_name":"Bravington","email":"pbravington1z@accuweather.com","gender":"Female","avatar":"https://robohash.org/voluptasmaioresnihil.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":73,"first_name":"Somerset","last_name":"Dewerson","email":"sdewerson20@amazon.co.jp","gender":"Male","avatar":"https://robohash.org/quisdebitisexcepturi.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":74,"first_name":"Vassily","last_name":"Riping","email":"vriping21@umich.edu","gender":"Male","avatar":"https://robohash.org/natusundeperferendis.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":75,"first_name":"Karlen","last_name":"Hastie","email":"khastie22@nasa.gov","gender":"Female","avatar":"https://robohash.org/aliasreprehenderitsit.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":76,"first_name":"Cori","last_name":"Tromans","email":"ctromans23@feedburner.com","gender":"Male","avatar":"https://robohash.org/omnisquaeratquae.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":77,"first_name":"Lolly","last_name":"Steffens","email":"lsteffens24@elegantthemes.com","gender":"Female","avatar":"https://robohash.org/quaecumquam.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":78,"first_name":"Ricki","last_name":"Denisovich","email":"rdenisovich25@mediafire.com","gender":"Male","avatar":"https://robohash.org/istedelectusaliquam.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":79,"first_name":"Devy","last_name":"Tregonna","email":"dtregonna26@globo.com","gender":"Bigender","avatar":"https://robohash.org/etrationefuga.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":80,"first_name":"Carry","last_name":"Harrie","email":"charrie27@ucoz.ru","gender":"Female","avatar":"https://robohash.org/suntverovoluptatem.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":81,"first_name":"Curran","last_name":"Mea","email":"cmea28@cafepress.com","gender":"Male","avatar":"https://robohash.org/officianobisomnis.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":82,"first_name":"Nan","last_name":"Poxon","email":"npoxon29@live.com","gender":"Female","avatar":"https://robohash.org/iureadipiscipossimus.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":83,"first_name":"Tim","last_name":"Redford","email":"tredford2a@paginegialle.it","gender":"Female","avatar":"https://robohash.org/magniametneque.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":84,"first_name":"Orella","last_name":"Gibke","email":"ogibke2b@house.gov","gender":"Female","avatar":"https://robohash.org/estliberoaspernatur.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":85,"first_name":"Almeria","last_name":"Arr","email":"aarr2c@washington.edu","gender":"Female","avatar":"https://robohash.org/temporavelitquis.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":86,"first_name":"Robyn","last_name":"Landrick","email":"rlandrick2d@elegantthemes.com","gender":"Female","avatar":"https://robohash.org/architectoevenietquis.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":87,"first_name":"Shermie","last_name":"Laux","email":"slaux2e@seattletimes.com","gender":"Male","avatar":"https://robohash.org/veltemporibusitaque.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":88,"first_name":"Brig","last_name":"Cuseick","email":"bcuseick2f@rakuten.co.jp","gender":"Male","avatar":"https://robohash.org/voluptatemdignissimosomnis.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":89,"first_name":"Crichton","last_name":"Ironmonger","email":"cironmonger2g@icq.com","gender":"Male","avatar":"https://robohash.org/etquoquisquam.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":90,"first_name":"Falkner","last_name":"Hallet","email":"fhallet2h@cnn.com","gender":"Male","avatar":"https://robohash.org/evenietavoluptatem.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":91,"first_name":"Ephrayim","last_name":"McCray","email":"emccray2i@prlog.org","gender":"Male","avatar":"https://robohash.org/dolorsuscipitdolorum.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":92,"first_name":"Lita","last_name":"Kedwell","email":"lkedwell2j@gizmodo.com","gender":"Bigender","avatar":"https://robohash.org/perspiciatisomnisdolore.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":93,"first_name":"Abbie","last_name":"Greenstock","email":"agreenstock2k@vinaora.com","gender":"Genderqueer","avatar":"https://robohash.org/namautlaudantium.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":94,"first_name":"Jermaine","last_name":"Boorne","email":"jboorne2l@bravesites.com","gender":"Female","avatar":"https://robohash.org/omnisaliquidreprehenderit.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":95,"first_name":"Lilla","last_name":"Gensavage","email":"lgensavage2m@ihg.com","gender":"Female","avatar":"https://robohash.org/etveritatismolestiae.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":96,"first_name":"Marcelia","last_name":"Camillo","email":"mcamillo2n@who.int","gender":"Female","avatar":"https://robohash.org/magnamvoluptasullam.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":97,"first_name":"Liliane","last_name":"Bartul","email":"lbartul2o@arizona.edu","gender":"Female","avatar":"https://robohash.org/illumquaeratmagni.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":98,"first_name":"Ag","last_name":"Bettleson","email":"abettleson2p@nps.gov","gender":"Female","avatar":"https://robohash.org/utimpeditqui.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":99,"first_name":"Garvin","last_name":"Rainsdon","email":"grainsdon2q@woothemes.com","gender":"Male","avatar":"https://robohash.org/placeatquiset.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":100,"first_name":"Ronalda","last_name":"Keir","email":"rkeir2r@ustream.tv","gender":"Female","avatar":"https://robohash.org/ducimusoditvero.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":101,"first_name":"Roxanna","last_name":"Skipton","email":"rskipton2s@constantcontact.com","gender":"Female","avatar":"https://robohash.org/ullamnobisquia.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":102,"first_name":"Erinn","last_name":"Breeze","email":"ebreeze2t@miibeian.gov.cn","gender":"Genderqueer","avatar":"https://robohash.org/veritatisilloet.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":103,"first_name":"Harcourt","last_name":"Wooffinden","email":"hwooffinden2u@yandex.ru","gender":"Male","avatar":"https://robohash.org/maximeipsalibero.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":104,"first_name":"Leigh","last_name":"Smithen","email":"lsmithen2v@tamu.edu","gender":"Female","avatar":"https://robohash.org/adipiscicorruptidebitis.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":105,"first_name":"Court","last_name":"Arpur","email":"carpur2w@bigcartel.com","gender":"Male","avatar":"https://robohash.org/namprovidenttenetur.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":106,"first_name":"Nicolina","last_name":"Clutterbuck","email":"nclutterbuck2x@tumblr.com","gender":"Female","avatar":"https://robohash.org/asperioresnonnulla.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":107,"first_name":"Sibby","last_name":"Barnsdale","email":"sbarnsdale2y@earthlink.net","gender":"Female","avatar":"https://robohash.org/atdoloribusimpedit.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":108,"first_name":"Nichols","last_name":"Wisham","email":"nwisham2z@ovh.net","gender":"Male","avatar":"https://robohash.org/autemvelsint.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":109,"first_name":"Stephenie","last_name":"Brocks","email":"sbrocks30@shareasale.com","gender":"Female","avatar":"https://robohash.org/cuminet.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":110,"first_name":"Martynne","last_name":"Abrashkin","email":"mabrashkin31@tumblr.com","gender":"Female","avatar":"https://robohash.org/deseruntnumquamimpedit.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":111,"first_name":"Leonanie","last_name":"Sullly","email":"lsullly32@nyu.edu","gender":"Female","avatar":"https://robohash.org/laudantiumipsadolores.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":112,"first_name":"Matelda","last_name":"Josefsen","email":"mjosefsen33@mozilla.org","gender":"Female","avatar":"https://robohash.org/ullammaioresea.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":113,"first_name":"Barron","last_name":"Treuge","email":"btreuge34@yahoo.co.jp","gender":"Male","avatar":"https://robohash.org/velitutlaudantium.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":114,"first_name":"Karlik","last_name":"Broggelli","email":"kbroggelli35@cargocollective.com","gender":"Male","avatar":"https://robohash.org/voluptatesassumendaquisquam.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":115,"first_name":"Norene","last_name":"Comer","email":"ncomer36@ustream.tv","gender":"Female","avatar":"https://robohash.org/aliquamuthic.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":116,"first_name":"Aloysius","last_name":"Woltman","email":"awoltman37@photobucket.com","gender":"Male","avatar":"https://robohash.org/consequaturhicexercitationem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":117,"first_name":"Sunny","last_name":"Rosingdall","email":"srosingdall38@columbia.edu","gender":"Male","avatar":"https://robohash.org/assumendaminussit.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":118,"first_name":"Kirsten","last_name":"Dran","email":"kdran39@youtube.com","gender":"Female","avatar":"https://robohash.org/etrationealiquid.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":119,"first_name":"Pepillo","last_name":"O'Flynn","email":"poflynn3a@ftc.gov","gender":"Male","avatar":"https://robohash.org/placeatnatussit.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":120,"first_name":"Britt","last_name":"Mostyn","email":"bmostyn3b@home.pl","gender":"Female","avatar":"https://robohash.org/siteamaxime.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":121,"first_name":"Rancell","last_name":"Petracchi","email":"rpetracchi3c@hubpages.com","gender":"Bigender","avatar":"https://robohash.org/ullamsaepemollitia.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":122,"first_name":"Angelika","last_name":"Thebe","email":"athebe3d@biglobe.ne.jp","gender":"Genderqueer","avatar":"https://robohash.org/inciduntenimrerum.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":123,"first_name":"Milicent","last_name":"Wooffitt","email":"mwooffitt3e@eventbrite.com","gender":"Female","avatar":"https://robohash.org/utetvoluptatem.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":124,"first_name":"Agneta","last_name":"Petett","email":"apetett3f@whitehouse.gov","gender":"Female","avatar":"https://robohash.org/etblanditiisaut.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":125,"first_name":"Whitney","last_name":"Gulston","email":"wgulston3g@slideshare.net","gender":"Male","avatar":"https://robohash.org/sitfugitnemo.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":126,"first_name":"Murial","last_name":"Axtell","email":"maxtell3h@paypal.com","gender":"Bigender","avatar":"https://robohash.org/doloremimpeditipsam.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":127,"first_name":"Pebrook","last_name":"Stoneham","email":"pstoneham3i@redcross.org","gender":"Male","avatar":"https://robohash.org/rerumexercitationemdoloremque.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":128,"first_name":"Cecil","last_name":"Varndall","email":"cvarndall3j@oracle.com","gender":"Male","avatar":"https://robohash.org/velitrerumeligendi.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":129,"first_name":"Brier","last_name":"McCrossan","email":"bmccrossan3k@rambler.ru","gender":"Polygender","avatar":"https://robohash.org/autemvoluptatemrerum.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":130,"first_name":"Hannie","last_name":"Mishow","email":"hmishow3l@wsj.com","gender":"Female","avatar":"https://robohash.org/quoutaut.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":131,"first_name":"Clair","last_name":"Wardale","email":"cwardale3m@weibo.com","gender":"Female","avatar":"https://robohash.org/estundedolores.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":132,"first_name":"Gabriella","last_name":"Purcell","email":"gpurcell3n@army.mil","gender":"Female","avatar":"https://robohash.org/veletnon.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":133,"first_name":"Alene","last_name":"Toten","email":"atoten3o@aboutads.info","gender":"Female","avatar":"https://robohash.org/inciduntprovidentnemo.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":134,"first_name":"Cornela","last_name":"Southerill","email":"csoutherill3p@deviantart.com","gender":"Polygender","avatar":"https://robohash.org/beataeipsumatque.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":135,"first_name":"Erwin","last_name":"MacSkeagan","email":"emacskeagan3q@diigo.com","gender":"Male","avatar":"https://robohash.org/etillumest.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":136,"first_name":"Keary","last_name":"Phizackarley","email":"kphizackarley3r@va.gov","gender":"Male","avatar":"https://robohash.org/doloremillumautem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":137,"first_name":"Rae","last_name":"Oleksiak","email":"roleksiak3s@hubpages.com","gender":"Female","avatar":"https://robohash.org/remplaceatodit.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":138,"first_name":"Stafford","last_name":"Napoleone","email":"snapoleone3t@vinaora.com","gender":"Male","avatar":"https://robohash.org/veniammolestiaevoluptatibus.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":139,"first_name":"Winfield","last_name":"Crawforth","email":"wcrawforth3u@skyrock.com","gender":"Male","avatar":"https://robohash.org/ducimusdoloresaliquam.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":140,"first_name":"Hildy","last_name":"Witherby","email":"hwitherby3v@blinklist.com","gender":"Female","avatar":"https://robohash.org/nobisaperiamet.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":141,"first_name":"Jessamyn","last_name":"Forsdyke","email":"jforsdyke3w@princeton.edu","gender":"Female","avatar":"https://robohash.org/etducimusquas.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":142,"first_name":"Osbert","last_name":"Pinnegar","email":"opinnegar3x@dot.gov","gender":"Non-binary","avatar":"https://robohash.org/etveniamrerum.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":143,"first_name":"Lydon","last_name":"Radbond","email":"lradbond3y@tinyurl.com","gender":"Male","avatar":"https://robohash.org/sedquodexpedita.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":144,"first_name":"Anneliese","last_name":"Eldridge","email":"aeldridge3z@mtv.com","gender":"Female","avatar":"https://robohash.org/aetcorporis.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":145,"first_name":"Northrop","last_name":"Skerme","email":"nskerme40@baidu.com","gender":"Male","avatar":"https://robohash.org/autemducimusnulla.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":146,"first_name":"Mart","last_name":"Corballis","email":"mcorballis41@canalblog.com","gender":"Male","avatar":"https://robohash.org/autidculpa.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":147,"first_name":"Marylou","last_name":"Pech","email":"mpech42@hostgator.com","gender":"Genderqueer","avatar":"https://robohash.org/itaqueestautem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":148,"first_name":"Gunar","last_name":"Balf","email":"gbalf43@bigcartel.com","gender":"Male","avatar":"https://robohash.org/culpapraesentiumomnis.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":149,"first_name":"Charlotta","last_name":"Buddington","email":"cbuddington44@nytimes.com","gender":"Female","avatar":"https://robohash.org/velitoditnon.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":150,"first_name":"Morris","last_name":"Waddams","email":"mwaddams45@pagesperso-orange.fr","gender":"Male","avatar":"https://robohash.org/laboriosamautoptio.png?size=50x50&set=set1","domain":"Finance","available":true}
  ]

  getAllUsers(page: number, pageSize: number): any[] {
    const startIndex = (page-1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.allUsers.slice(startIndex, endIndex);
  }

  getAllUsersLength(){
    return this.allUsers.length;
  }

  fetchUser(name:string):any[]{
    return this.allUsers.filter((eachUser)=>eachUser.first_name.toLowerCase().startsWith(name));
  }

  private allDomains: string[] = [
    'Sales',
    'Finance',
    'Marketing',
    'IT',
    'Management',
    'UI Designing',
  ];

  filterUsers(selectedDomain:string|null,selectedGender:string|null,selectedAvailability:boolean|null): any[] {
    return this.allUsers.filter(user => {
      const domainFilter = !selectedDomain || user.domain === selectedDomain;
      const genderFilter = !selectedGender || user.gender === selectedGender;
      const availabilityFilter = selectedAvailability === null || user.available === selectedAvailability;
      return domainFilter && genderFilter && availabilityFilter;
    });
  }

  
  getAllDomains(): string[] {
    return this.allDomains;
  }



 
}
