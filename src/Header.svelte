<script>
  // your script goes here
</script>


<div class="wrapperflex">
  <button class="headerbutton cross" onclick="closeWindow(window)"></button>
  <div class="title">WELCOME TO KOOKIE'S SITE!</div>
  <button class="headerbutton expand"></button>
</div>


<style>

 .wrapperflex{
   display: flex;
   align-items: center;
 }

 .title{
   flex:4;
 }

  button {
    height : 20px;
    width: 20px;
    border: 1px solid black;
    background-color : lightgray;
    font-size: 80%;
    color: black;
    margin-left:10px;
    margin-right:10px;
    background-repeat:none;
  }

  .cross{
    background-image: url('./assets/cross.png');
    background-color: white;
  }

  .expand{
    background-image: url('./assets/expand.png');
    background-color: white;
  }
</style>
