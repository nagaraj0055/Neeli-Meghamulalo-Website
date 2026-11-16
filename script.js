const lyricsData = [
  {
    section: "PALLAVI",
    lines: [
      {
        telugu: "నీలిమేఘములలో ధరణీ తేజం",
        transliteration: "Neeli meghamulalo dharanee tejam",
        words: [
          ["నీలి", "Blue"],
          ["మేఘములలో", "Among the clouds"],
          ["ధరణీ", "Earth"],
          ["తేజం", "Radiance, brilliance"]
        ],
        literal: "The radiance of the earth among the blue clouds.",
        deeper: "The imagery connects the beauty of the natural world with an extraordinary inner radiance. The blue clouds establish a dreamy, poetic atmosphere.",
        mythology: "Nature imagery is frequently used in classical Indian poetry. This line does not by itself identify a specific Ramayana incident.",
        emotion: "Wonder, beauty and anticipation."
      },
      {
        telugu: "నయనాంతరంగములలో వనధీ నాదం",
        transliteration: "Nayanantarangamulalo vanadhee naadam",
        words: [
          ["నయన", "Eyes"],
          ["అంతరంగములలో", "Within the inner depths"],
          ["వనధీ", "Ocean (poetic reading; verify the intended word)"],
          ["నాదం", "Sound or resonance"]
        ],
        literal: "An ocean-like resonance within the depths of the eyes.",
        deeper: "The imagery suggests that a person's eyes can hold emotions as deep and powerful as an ocean. Feelings may remain hidden even when the eyes reveal something.",
        mythology: "Primarily poetic imagery, rather than a direct reference to a specific epic event.",
        emotion: "Longing, depth and hidden feelings."
      },
      {
        telugu: "పోరునే గెలుచు పార్థివీపతి",
        transliteration: "Porune geluchu parthiveepathi",
        words: [
          ["పోరునే", "In battle"],
          ["గెలుచు", "One who wins or conquers"],
          ["పార్థివీపతి", "A king or earthly ruler"]
        ],
        literal: "A ruler who conquers in battle.",
        deeper: "The song introduces a powerful warrior, someone who is accustomed to victory and command. This sets up the contrast between worldly power and emotional understanding.",
        mythology: "The heroic image can be associated with Rama's royal and warrior identity.",
        emotion: "Power, courage and greatness."
      },
      {
        telugu: "సాటిలేని ఘనుడైనా",
        transliteration: "Saatileni ghanudaina",
        words: [
          ["సాటిలేని", "Unmatched, without an equal"],
          ["ఘనుడు", "Great or distinguished person"],
          ["అయినా", "Even though"]
        ],
        literal: "Even if he is an extraordinary person without an equal.",
        deeper: "The person may possess every quality that makes him admirable in society. But the song questions whether those qualities are enough in a relationship.",
        mythology: "The description evokes Rama's extraordinary stature.",
        emotion: "Admiration mixed with uncertainty."
      },
      {
        telugu: "నీరజాక్షి అలిగే వేళ",
        transliteration: "Neerajakshi alige vela",
        words: [
          ["నీరజాక్షి", "Lotus-eyed woman"],
          ["అలిగే", "Becomes upset or displeased"],
          ["వేళ", "Time or moment"]
        ],
        literal: "When the lotus-eyed woman becomes upset.",
        deeper: "The song shifts from the warrior's greatness to the emotional vulnerability of the woman he loves. It asks whether he can understand her feelings.",
        mythology: "Neerajakshi is a traditional poetic epithet for a beautiful woman. In this context, it evokes Sita.",
        emotion: "Vulnerability, affection and sensitivity."
      },
      {
        telugu: "నుడివిల్లు ముడి వంచగలడా?",
        transliteration: "Nudivillu mudi vanchagalada?",
        words: [
          ["నుడివిల్లు", "Bow-like expression or eyebrows (poetic reading)"],
          ["ముడి", "Knot, crease or furrow"],
          ["వంచగలడా", "Can he bend or soften?"]
        ],
        literal: "Can he soften the furrow in her bow-like expression?",
        deeper: "Can a great warrior make his beloved smile when she is upset? The song suggests that winning someone's heart requires a different kind of strength.",
        mythology: "This is poetic imagery, not an additional event from the Ramayana.",
        emotion: "Tenderness, reconciliation and love."
      },
      {
        telugu: "సడే చాలు శత సైన్యాలు",
        transliteration: "Sade chaalu shata sainyaalu",
        words: [
          ["సడే", "A signal or gesture (intended poetic sense)"],
          ["చాలు", "Enough"],
          ["శత", "Hundred"],
          ["సైన్యాలు", "Armies"]
        ],
        literal: "A mere signal is enough to command hundreds of armies.",
        deeper: "The line describes extraordinary authority: a warrior whose smallest gesture can mobilize enormous forces.",
        mythology: "Evokes the heroic and royal stature associated with Rama.",
        emotion: "Authority, discipline and power."
      },
      {
        telugu: "నడిపే ధీరుడైనా",
        transliteration: "Nadipe dheerudaina",
        words: [
          ["నడిపే", "One who leads or commands"],
          ["ధీరుడు", "Brave and courageous person"],
          ["అయినా", "Even if"]
        ],
        literal: "Even if he is a brave man who leads them.",
        deeper: "Leading armies requires courage and intelligence. Understanding the private emotions of a loved one requires another kind of intelligence.",
        mythology: "A continuation of the heroic description.",
        emotion: "Courage and responsibility."
      },
      {
        telugu: "వసుధా వాణి మిథిలా వేణి",
        transliteration: "Vasudhaa vaanii mithilaa veni",
        words: [
          ["వసుధా", "Earth"],
          ["వాణి", "Speech or voice"],
          ["మిథిలా", "Kingdom of Mithila"],
          ["వేణి", "Braid or braided hair"]
        ],
        literal: "A poetic description invoking the Earth, voice and the woman associated with Mithila.",
        deeper: "The imagery evokes Sita through her connection with the Earth and Mithila. The exact grammatical relationship between these poetic expressions needs to be considered in the full composition.",
        mythology: "Sita is traditionally known as the daughter of the Earth and the princess of Mithila.",
        emotion: "Grace, identity and feminine dignity."
      },
      {
        telugu: "మదివెనుక పలుకు పలుకులెఱుగ గలడా?",
        transliteration: "Madi venuka paluku palukulu eruga galadaa?",
        words: [
          ["మది", "Heart or mind"],
          ["వెనుక", "Behind or within"],
          ["పలుకు పలుకులు", "Words, expressions or unspoken thoughts"],
          ["ఎఱుగ", "To know or understand"],
          ["గలడా", "Can he?"]
        ],
        literal: "Can he understand the words and thoughts hidden within her heart?",
        deeper: "A person may hear spoken words but still fail to understand what another person truly feels. The line emphasizes emotional intelligence and sensitivity.",
        mythology: "The context evokes Sita's inner thoughts and the emotional uncertainty surrounding her marriage.",
        emotion: "Understanding, intimacy and emotional connection."
      },
      {
        telugu: "నీలిమేఘములలో ధరణీ తేజం",
        transliteration: "Neeli meghamulalo dharanee tejam",
        words: [
          ["నీలి", "Blue"],
          ["మేఘములలో", "Among the clouds"],
          ["ధరణీ", "Earth"],
          ["తేజం", "Radiance"]
        ],
        literal: "The radiance of the earth among the blue clouds.",
        deeper: "The opening imagery returns, allowing the listener to revisit the song's poetic atmosphere after considering its questions about love.",
        mythology: "Poetic nature imagery.",
        emotion: "Beauty and reflection."
      },
      {
        telugu: "నయనాంతరంగములలో వనధీ నాదం",
        transliteration: "Nayanantarangamulalo vanadhee naadam",
        words: [
          ["నయనాంతరంగములలో", "Within the depths of the eyes"],
          ["వనధీ", "Ocean (poetic reading; verify intended word)"],
          ["నాదం", "Resonance or sound"]
        ],
        literal: "An ocean-like resonance within the depths of the eyes.",
        deeper: "The repeated line reinforces the idea that human emotions can be much deeper than what is visible externally.",
        mythology: "Poetic imagery.",
        emotion: "Longing and emotional depth."
      }
    ]
  },
  {
    section: "CHARANAM",
    lines: [
      {
        telugu: "జలధి జలముల్ని లాలించు మేఘమే",
        transliteration: "Jaladhi jalamulni laalinchu meghame",
        words: [
          ["జలధి", "Ocean"],
          ["జలముల్ని", "Waters"],
          ["లాలించు", "Nurture, cherish or lovingly care for"],
          ["మేఘమే", "The cloud itself"]
        ],
        literal: "The cloud lovingly nurtures the waters of the ocean.",
        deeper: "The cloud is presented as a nurturing force. It can represent a parent who protects and raises a child with affection.",
        mythology: "A metaphor drawn from nature, rather than a direct Ramayana event.",
        emotion: "Nurturing, parental love and care."
      },
      {
        telugu: "వాన చినుకు మార్గమును లిఖించదే",
        transliteration: "Vaana chinuku maargamunu likhinchade",
        words: [
          ["వాన", "Rain"],
          ["చినుకు", "Raindrop"],
          ["మార్గమును", "Path or direction"],
          ["లిఖించదే", "Does not write or determine"]
        ],
        literal: "The cloud does not write or determine the path of every raindrop.",
        deeper: "Parents can nurture their children, but they cannot completely determine the direction of their lives. Love must also allow independence.",
        mythology: "This is a philosophical metaphor, not a specific Ramayana episode.",
        emotion: "Freedom, separation and acceptance."
      },
      {
        telugu: "స్వయంవరం అనేది ఓ మాయే",
        transliteration: "Swayamvaram anedi o maaye",
        words: [
          ["స్వయంవరం", "Swayamvaram, a traditional marriage-choice ceremony"],
          ["అనేది", "Is or is called"],
          ["ఓ", "A"],
          ["మాయే", "Illusion or something deceptive"]
        ],
        literal: "The Swayamvaram itself is an illusion.",
        deeper: "The lyric raises a question about whether a ceremony or formal choice can truly capture the complexity of love and marriage.",
        mythology: "Refers to Sita's Swayamvaram in Mithila.",
        emotion: "Uncertainty, destiny and expectations."
      },
      {
        telugu: "స్వయాన కోరు వీలు లేదాయె",
        transliteration: "Svayaana koru veelu ledaaye",
        words: [
          ["స్వయాన", "Personally or by oneself"],
          ["కోరు", "Desire or choose"],
          ["వీలు", "Possibility or freedom"],
          ["లేదాయె", "There is no possibility"]
        ],
        literal: "There is no freedom to choose entirely according to one's own desire.",
        deeper: "The lyric questions how much freedom an individual really has when marriage is shaped by family expectations, traditions and circumstances.",
        mythology: "Can be understood in the context of the Swayamvaram, but the exact intended interpretation is poetic.",
        emotion: "Choice, limitation and longing."
      },
      {
        telugu: "మనస్సులే ముడేయు వేళాయె",
        transliteration: "Manassule mudeyu velaaye",
        words: [
          ["మనస్సులే", "Hearts or minds themselves"],
          ["ముడేయు", "Tie together or become joined"],
          ["వేళాయె", "The time or moment has come"]
        ],
        literal: "It is the moment when hearts are tied together.",
        deeper: "A marriage becomes meaningful when two hearts connect. A formal ceremony may unite two people, but emotional connection is what makes that union real.",
        mythology: "Connects with the marriage theme surrounding Rama and Sita.",
        emotion: "Union, commitment and companionship."
      },
      {
        telugu: "శివాస్త్ర ధారణేల కొలతాయే",
        transliteration: "Shivastra dharanela kolataaye",
        words: [
          ["శివాస్త్ర", "Shiva's divine weapon or bow (contextual reading)"],
          ["ధారణేల", "Holding, bearing or wielding (wording requires verification)"],
          ["కొలతాయే", "A measure or standard"]
        ],
        literal: "Can the bearing or wielding of Shiva's weapon be the measure?",
        deeper: "The song questions whether physical strength, demonstrated through a divine weapon or bow, can measure the emotional compatibility of two people.",
        mythology: "Evokes the famous Shiva bow episode associated with Rama's Swayamvaram.",
        emotion: "Questioning, reflection and the limits of physical achievement."
      },
      {
        telugu: "వరంధాముడే వాడే",
        transliteration: "Varandhaamude vaade",
        words: [
          ["వర", "Boons, blessings or excellence (context-dependent)"],
          ["ధాముడు", "A lord or abode (compound interpretation uncertain)"],
          ["వాడే", "He himself"]
        ],
        literal: "A poetic description of him as an exalted or blessed figure.",
        deeper: "The song shifts its attention towards Rama's extraordinary nature and divine stature. The precise compound should be checked against the official lyric transcription.",
        mythology: "The surrounding passage evokes Rama.",
        emotion: "Reverence and admiration."
      },
      {
        telugu: "పరం ఏలు పసివాడే",
        transliteration: "Param elu pasivaade",
        words: [
          ["పరం", "Supreme or highest"],
          ["ఏలు", "To rule or govern (contextual reading)"],
          ["పసివాడు", "A child or innocent young one"],
          ["ఏ", "Emphatic poetic ending"]
        ],
        literal: "He is the supreme ruler, yet possesses the innocence of a child.",
        deeper: "The line creates a contrast between divine greatness and childlike innocence. True greatness need not eliminate gentleness.",
        mythology: "Reflects the traditional image of Rama as both divine and compassionate.",
        emotion: "Innocence, tenderness and divinity."
      },
      {
        telugu: "స్వరం లాగ మారాడే",
        transliteration: "Swaram laaga maaraade",
        words: [
          ["స్వరం", "Voice or musical note"],
          ["లాగ", "Like"],
          ["మారాడే", "He transformed"]
        ],
        literal: "He transformed himself like a musical note or voice.",
        deeper: "The image suggests that Rama becomes a gentle, comforting presence rather than displaying his authority.",
        mythology: "A poetic portrayal of Rama's tenderness.",
        emotion: "Gentleness and affection."
      },
      {
        telugu: "స్వయం లాలి పాడాడే",
        transliteration: "Swayam laali paadaade",
        words: [
          ["స్వయం", "Himself or personally"],
          ["లాలి", "Lullaby"],
          ["పాడాడే", "He sang"]
        ],
        literal: "He personally sang a lullaby.",
        deeper: "Instead of relying on status or power, he expresses care through a simple, tender gesture.",
        mythology: "A poetic expression of compassion, not necessarily a literal event from the Ramayana.",
        emotion: "Comfort, care and tenderness."
      },
      {
        telugu: "భాస్కరాభరణ కారుణీగుణ శౌరి శ్రీకరుడు వాడే",
        transliteration: "Bhaaskaraabharana kaaruneeguna shauri sreekarudu vaade",
        words: [
          ["భాస్కర", "Sun"],
          ["ఆభరణ", "Adornment or ornament"],
          ["కారుణీగుణ", "Quality of compassion"],
          ["శౌరి", "Heroic one; a name associated with Krishna and heroic traditions"],
          ["శ్రీకరుడు", "One who brings prosperity or auspiciousness"],
          ["వాడే", "He himself"]
        ],
        literal: "A poetic praise of a radiant, compassionate and auspicious heroic figure.",
        deeper: "The line brings together imagery of brilliance, compassion and greatness. The exact compound divisions should be verified with the official lyricist's transcription before treating every word as definitive.",
        mythology: "The surrounding song context identifies the praised figure with Rama. Some individual epithets have broader mythological usage.",
        emotion: "Divinity, compassion and reverence."
      },
      {
        telugu: "అవనిసూన అనుశోకాన స్థిమితాన తానుండ లేడే",
        transliteration: "Avanisuna anushokaana sthimitaana taanunda lede",
        words: [
          ["అవనిసూన", "Daughter of the Earth; Sita"],
          ["అను", "With regard to or concerning (contextual reading)"],
          ["శోకాన", "In sorrow or grief"],
          ["స్థిమితాన", "Calm or composed"],
          ["తాను", "He himself"],
          ["ఉండలేడే", "Cannot remain"]
        ],
        literal: "He cannot remain composed when the daughter of the Earth is in sorrow.",
        deeper: "Rama's emotional connection with Sita is so deep that her suffering affects him. His greatness is expressed through empathy, not merely power.",
        mythology: "Sita is traditionally described as the daughter of the Earth. Rama and Sita's relationship is central to the Ramayana.",
        emotion: "Empathy, devotion and shared sorrow."
      },
      {
        telugu: "శరాఘాతమైనా గాని తొణికేవాడు కాడే",
        transliteration: "Sharaaghaatamaina gaani thonikevaadu kaade",
        words: [
          ["శర", "Arrow"],
          ["ఆఘాతం", "Impact or strike"],
          ["అయినా గాని", "Even if"],
          ["తొణికేవాడు", "One who trembles or wavers"],
          ["కాడే", "He is not"]
        ],
        literal: "Even when struck by arrows, he does not tremble.",
        deeper: "The line portrays extraordinary courage. Yet the contrast with Sita's sorrow suggests that emotional pain can affect even the strongest person.",
        mythology: "Evokes Rama's heroic warrior identity.",
        emotion: "Courage, resilience and devotion."
      },
      {
        telugu: "సిరి సేవించి సరి లాలించి",
        transliteration: "Siri sevanchi sari laalinchi",
        words: [
          ["సిరి", "Wealth, prosperity or royal grandeur"],
          ["సేవించి", "Serving or attending to (contextual reading)"],
          ["సరి", "Properly or suitably"],
          ["లాలించి", "Cherishing or comforting"]
        ],
        literal: "A poetic image of caring and comforting while setting aside worldly grandeur.",
        deeper: "The emphasis is on affection and attention. A loving person gives importance to the beloved's well-being rather than merely displaying status.",
        mythology: "Interpreted within the Rama-Sita emotional context.",
        emotion: "Care, humility and affection."
      },
      {
        telugu: "కుశలములు నిలుప ఘనము నొదిలి కదిలే",
        transliteration: "Kushalamulu nilupa ghanamu nodili kadile",
        words: [
          ["కుశలములు", "Well-being or welfare"],
          ["నిలుప", "To maintain or preserve"],
          ["ఘనము", "Greatness, grandeur or dignity"],
          ["నొదిలి", "Leaving aside"],
          ["కదిలే", "He moves or comes forward"]
        ],
        literal: "He leaves aside his grandeur and moves forward to preserve her well-being.",
        deeper: "The line suggests that love means prioritizing another person's welfare over pride, status and outward greatness.",
        mythology: "A poetic interpretation of Rama's loving and compassionate nature.",
        emotion: "Selflessness, humility and companionship."
      },
      {
        telugu: "నీలిమేఘములలో ధరణీ తేజం",
        transliteration: "Neeli meghamulalo dharanee tejam",
        words: [
          ["నీలిమేఘములలో", "Among the blue clouds"],
          ["ధరణీ", "Earth"],
          ["తేజం", "Radiance"]
        ],
        literal: "The radiance of the earth among the blue clouds.",
        deeper: "The refrain returns, bringing the listener back to the beautiful imagery that introduced the song.",
        mythology: "Nature imagery.",
        emotion: "Wonder and reflection."
      },
      {
        telugu: "నయనాంతరంగములలో వనధీ నాదం",
        transliteration: "Nayanantarangamulalo vanadhee naadam",
        words: [
          ["నయనాంతరంగములలో", "Within the depths of the eyes"],
          ["వనధీ", "Ocean (poetic reading; verify intended word)"],
          ["నాదం", "Resonance"]
        ],
        literal: "An ocean-like resonance within the depths of the eyes.",
        deeper: "The song closes by returning to the idea that the deepest emotions are often carried silently within us.",
        mythology: "Poetic imagery.",
        emotion: "Longing, depth and emotional resonance."
      }
    ]
  }
];

const decoder = document.getElementById("decoder");

function renderLyrics() {
  decoder.innerHTML = "";

  lyricsData.forEach((section, sectionIndex) => {
    const heading = document.createElement("div");
    heading.innerHTML = `
      <div class="section-label">${section.section}</div>
    `;
    decoder.appendChild(heading);

    section.lines.forEach((line, index) => {
      const card = document.createElement("article");
      card.className = "decode-card";

      const wordsHTML = line.words.map(([telugu, meaning]) => `
        <div class="word">
          <strong class="telugu">${telugu}</strong>
          <span>${meaning}</span>
        </div>
      `).join("");

      card.innerHTML = `
        <div class="decode-head">
          <div>
            <div class="tag">
              ${section.section} · LINE ${String(index + 1).padStart(2, "0")}
            </div>
            <h3 class="telugu">${line.telugu}</h3>
            <small style="color:var(--muted)">
              ${line.transliteration}
            </small>
          </div>
          <span class="toggle-icon">＋</span>
        </div>

        <div class="decode-content">
          <p class="tag">01 · WORD-BY-WORD MEANING</p>
          <div class="word-list">${wordsHTML}</div>

          <p class="tag">02 · LITERAL TRANSLATION</p>
          <p class="meaning">${line.literal}</p>

          <p class="tag">03 · DEEP INTERPRETATION</p>
          <p>${line.deeper}</p>

          <p class="tag">04 · MYTHOLOGICAL CONNECTION</p>
          <p>${line.mythology}</p>

          <p class="tag">05 · EMOTIONAL MEANING</p>
          <p>${line.emotion}</p>
        </div>
      `;

      card.querySelector(".decode-head").addEventListener("click", () => {
        card.classList.toggle("open");
        card.querySelector(".toggle-icon").textContent =
          card.classList.contains("open") ? "−" : "＋";
      });

      decoder.appendChild(card);
    });
  });
}

renderLyrics();
