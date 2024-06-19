<template>
  <!--==================================闪烁=======================-->
  <div id="spark" class="container mt-3">
      <div class="spinner-grow text-muted"></div>
      <div class="spinner-grow text-primary"></div>
      <div class="spinner-grow text-success"></div>
      <div class="spinner-grow text-info"></div>
      <div class="spinner-grow text-warning"></div>
      <div class="spinner-grow text-danger"></div>
      <div class="spinner-grow text-secondary"></div>
      <div class="spinner-grow text-dark"></div>
      <div class="spinner-grow text-light"></div>
  </div>  
  <!--==============================导航===========================-->
    <!-- 导航栏开始 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">历史</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">人文</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">地理</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 导航栏结束 -->
  <!--=========================================================-->
  <div class="accordion" id="accordionExample">
  	
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         远古时期
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		距今约五六十万年前的旧石器时代，已有先民在此繁衍生息。<br>
  		新石器时代，黄河中游两岸及伊、洛、瀍、涧等河流的台地上，分布着许多氏族部落，新中国成立后在洛阳一带发现的孙旗屯文化遗址、王湾遗址、矬李遗址等近200处聚落遗址，便是当时人们居住、生活的地方。
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         夏商周时期
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		夏朝初年，禹划九州，河洛属古豫州地。洛阳是夏王朝立国和活动的中心地域。<br>
  		前1600年，商朝建立。商汤建都西亳（二里头遗址东北约6千米）。<br>
  		周平王元年（前770年），周平王东迁洛邑，是为东周。
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         秦汉时期
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		秦庄襄王元年（前249年），秦在洛阳置三川郡，郡治成周城。<br>
  		汉王元年（前206年），项羽封申阳为河南王，居洛阳。<br>
  		东汉光武建武元年（25年），刘秀定都洛阳，改洛阳为雒阳。		
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
         魏晋南北朝
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		黄初元年（220年），魏文帝曹丕定都洛阳，变雒阳为洛阳<br>
  		西晋泰始元年（265年），西晋代魏，仍以洛阳为都。<br>
  		北魏太和十八年（494年），孝文帝迁都洛阳。<br>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
         隋唐五代
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		隋大业元年（605年），隋炀帝迁都洛阳，在东周王城以东，汉魏故城以西18里处，新建洛阳城。<br>
  		唐显庆二年（657年），高宗以洛阳为都，置东都。<br>
  		唐天祐四年（907年），唐室亡祚，其后中原地区相继出现了后梁、后唐、后晋、后汉、后周五个短暂的王朝，史称五代。后梁、后唐、后晋均曾都洛阳，后汉、后周以洛阳为陪都。<br>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
         宋代至清代
        </button>
      </h2>
      <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		北宋，以洛阳为西京，置河南府。<br>
  		自元代始，洛阳不复为京，降为河南府治。<br>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingSeven">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
         民国时期
        </button>
      </h2>
      <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		民国元年（1912年），民国建立，废河南府，设河洛道，道尹公署驻洛阳，辖洛阳、偃师等19县。<br>
  		民国九年（1920年），直系军阀吴佩孚盘踞洛阳，在洛阳设置了两湖巡阅使公署和陆军第三师司令部。民国十二年（1923年），河南省长公署适于洛阳，洛阳成为河南省会。<br>
  		民国二十一年（1932年），日军进攻上海，国民党政府定洛阳为行都，并一度适洛办公。“七七事变”后，抗日战争全面爆发， [26]华北大部分地区沦陷，洛阳成为北方抗日前哨，国民党第一战区长官司令部驻洛阳。<br>
  		民国二十七年（1939年）秋，河南省政府再次迁洛，洛阳第二次成为河南省会。1944年，中国共产党领导人民建立豫西抗日根据地。<br>
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingEight">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
         解放后至今
        </button>
      </h2>
      <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
        <div class="accordion-body">
  		1948年，洛阳解放，洛阳市人民民主政府成立，析洛阳县城区为市，与洛阳县并置。<br>
  		1954年，洛阳市升格为河南省直辖市，市政府机关驻地设在老城民主街。<br>
  		1986年，洛阳地区撤销，洛宁、宜阳、嵩县、栾川、汝阳、伊川亦改属洛阳市。1993年，偃师县改为偃师市。2000年6月，经国务院批准，洛阳郊区更名为洛龙区。<br>
        截至2022年，洛阳市下辖7个市辖区、7个县、1个开发区，洛阳市人民政府驻洛龙区开元大道228号。
  	  </div>
      </div>
    </div>
    
  </div>
  <!--=========================================================-->
  
  
  
  
</template>