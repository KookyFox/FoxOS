<script>

  // your script goes here
</script>



<div class="bar">
  <img src="src/assets/xenia.png" class="xenialogo">
  <button>Patreon</button>
  <button>Twitter</button>
  <button>Masto</button>
  <button>KoFi</button>
  <button>Liberapay</button>
  <div class="clock"></div>
  <div class="systemtray">
    <img style="height:20px;" src="src/assets/www.png">
    <img style="height:20px;" src="src/assets/volumemute.png">
    <img style="height:20px;" src="src/assets/power.png">
  </div>
</div>


<style>
  @font-face {
  font-family: 'Sysfont';
  src: url('src/assets/sysfont.woff2') format('woff2'),
  url('src/assets/sysfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


  button {
    background-color:transparent;
    color: black;
    border: none;
    padding: 0px;
    padding-right:10px;
    padding-left:10px;
    height:100%;
    font-family:'Sysfont';
    font-size: 18px;
  }

  button:hover{
  background-color:lightskyblue;
}

  .xenialogo{
    padding-left:10px;
    padding-right:10px;
  }

  .bar{
    background-color: lightpink;
    height: 25px;
    opacity: 100%;
    border: 1px solid rebeccapurple;
    border-bottom:1px solid rebeccapurple;
    overflow: hidden;
    display: flex;
    align-items:center;
    min-width:0;
    z-index:100;
    font-family:'Sysfont';
  }
  .systemtray{
    
    justify-content:flex-end;
    
  }

  .clock {
    flex: 2;
  }

</style>


