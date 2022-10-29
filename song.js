/** @format */
let parasText = [
  "Every little thing gonna be alright!",
  "I won't be afraid just as long as you stand, stand by me.",
  "Work it, make it, do it, makes us: harder, better, faster, stronger",
  "Here come bad news talking this and that (Yeah). Well give me all you got, don't hold back (Yeah). Well I should probably warn you I'll be just fine (Yeah). No offense to you don't waste your time",
  "Tonight's the night, let's live it up. I got my money, let's spend it up. Go out and smash it, like, oh my god. Jump off that sofa, let's kick it off. I know that we'll have a ball",
  "If we get down and go out and just lose it all. I feel stressed out, I wanna let it go. Let's go way out, spaced out and losing all control",
];
  
  const addImportant = (before) => {
  let paraNum = before
    ? $("#id_importantBefore").val()
    : $("#id_importantAfter").val();
  paraNum -= 1;
  let wantedParagraph = $("#textArea p:eq(" + paraNum + ")");
  console.log("XXX", wantedParagraph.text());
  if (before) $("<span>AD LIB: </span>").prependTo(wantedParagraph);
  else $("<span>AD LIB: </span>").appendTo(wantedParagraph);
};


  // randomFillParagraph takes a random value from the seed array
  const randomfillParagraph = () => {
    let randomVerse = Math.floor(Math.random() * parasText.length);
    let newVerse = parasText[randomVerse];
    $("#id_freeSpace").val(newVerse);
  };
  

  const genereTitle = () => {
  
    let title = $("#id_titles").val();
    let letterName = $("#id_receiverName").val();
    let titleStr = `${title} ${letterName}`;

    $("#textArea").html("<h3>" + titleStr + "</h3>");
  };
 
  function createVerse() {
 
    let matchedSetParagraphs = $("#textArea p");
    let verseNumber = parseInt($("#id_verseToCreate").val());
   
    let paragraphContent = $("#id_freeSpace").val();
    let para = $(`<p>${paragraphContent}</p>`);
   
    let lastPara = matchedSetParagraphs.eq(verseNumber - 1);
    if (
      matchedSetParagraphs.length == 0 ||
      verseNumber > matchedSetParagraphs.length
    )

      para.appendTo($("#textArea"));
    else {
     
      lastPara.before(para);
    }
  }
  
  function endSong() {
    let signoff = $("#id_signoffs").val();
    let senderName = $("#id_senderName").val();
  
    let lastPara = $(`<p> ${signoff}, <br>${senderName}</p>`);
    $("#textArea p:last").after(lastPara);
  }
  