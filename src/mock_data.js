let mock = [{
    id: 1,
    bookName: "Rustler of Wind River",
    price: "$4.82",
    author: "George W. Ogden",
    image: '1.jpg',
    description: "An exciting tale of the attempts of the unscrupulous cattlemen to drive the homesteader from their holdings and leave the land free for grazing. Alan Macdonald leads the homesteaders in their defense and, after many misunderstandings and unjust accusations clears his love story as well."
},
    {
        id: 2,
        bookName: "Ronicky Doone",
        price: "$2.82",
        author: "Max Brand",
        image: "2.jpg",
        description: "Doone had won the respect of every law-abiding citizen, from Tombstone to Sonora--and the hatred of every bushwacking bandit! But Bill Gregg wasn't one to let a living legend get in his way. What nobody told Gregg was that Doone didn't enjoy living up to his hard-riding, rip-roaring life--unless he took a chance at losing it once in a while."
    },
    {
        id: 3,
        bookName: "Romeo and Juliet",
        price: "$2.85",
        author: "William Shakespeare",
        image: '3.jpg',
        description: "Romeo and Juliet is a tragic play written early in the career of William Shakespeare about two teenage \"star-cross'd lovers\" whose untimely deaths ultimately unite their feuding households. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal \"young lovers\""
    },
    {
        id: 4,
        bookName: "Alice in Wonderland",
        price: "$2.72",
        author: "Lewis Carroll",
        image: '4.jpg',
        description: "Alice's Adventures in Wonderland (1865) is a novel written by English author Charles Lutwidge Dodgson, better known under the pseudonym Lewis Carroll. It tells the story of a girl named Alice who falls down a rabbit-hole into a fantasy world populated by peculiar and anthropomorphic creatures."
    },
    {
        id: 5,
        bookName: "Sherlock Holmes",
        price: "$5.63",
        author: "Arthur Conan Doyle",
        image: '5.jpg',
        description: "The Adventures of Sherlock Holmes is a collection of twelve stories by Sir Arthur Conan Doyle, featuring his famous detective and illustrated by Sidney Paget.\n" +
            "\n" +
            "These are the first of the Sherlock Holmes short stories, originally published as single stories in the Strand Magazine from July 1891 to June 1892. The book was published in England on October 14, 1892 by George Newnes Ltd and in a US Edition on October 15 by Harper. The initial combined print run was 14,500 copies."

    },
    {
        id: 6,
        bookName: "The Raven",
        price: "$2.62",
        author: "Edgar Allan Poe",
        image: '6.jpg',
        description: "\"The Raven\" is a narrative poem by the American writer and poet Edgar Allan Poe. It was published for the first time on January 29, 1845, in the New York Evening Mirror. Noted for its musicality, stylized language and supernatural atmosphere, it tells of the mysterious visit of a talking raven to a distraught lover, tracing his slow descent into madness."
    },
    {
        id: 7,
        bookName: "Pride and Prejudice",
        price: "$1.31",
        author: "Jane Austen",
        image: '7.jpg',
        description: "Download\n" +
            "\n" +
            "Pride And Prejudice, the story of Mrs. Bennet's attempts to marry off her five daughters is one of the best-loved and most enduring classics in English literature. Excitement fizzes through the Bennet household at Longbourn in Hertfordshire when young, eligible Mr. Charles Bingley rents the fine house nearby. He may have sisters, but he also has male friends, and one of these—the haughty, and even wealthier, Mr. Fitzwilliam Darcy—irks the vivacious Elizabeth Bennet, the second of the Bennet girls. She annoys him. Which is how we know they must one day marry. The romantic clash between the opinionated Elizabeth and Darcy is a splendid rendition of civilized sparring. As the characters dance a delicate quadrille of flirtation and intrigue, Jane Austen's radiantly caustic wit and keen observation sparkle."
    },
    {
        id: 8,
        bookName: "The Treasure Trail",
        price: "$3.67",
        author: "Marah Ellis Ryan",
        image: '8.jpg',
        description: "Combining thrills of Mexican-American border life, German-Mexican plots, the adventures of a cowpuncher-miner and the happy termination of his quest for love and wealth, this tale holds the reader's attention from beginning to end."
    },
    {
        id: 9,
        bookName: "The Art of War",
        price: "$3.82",
        author: "Sun Tzu",
        image: '9.jpg',
        description: "The Art of War is a Chinese military treatise that was written during the 6th century BC by Sun Tzu. Composed of 13 chapters, each of which is devoted to one aspect of warfare, it has long been praised as the definitive work on military strategies and tactics of its time.\n" +
            "\n" +
            "The Art of War is one of the oldest books on military strategy in the world."

    },
    {
        id: 10,
        bookName: "All In The Mind",
        price: "$4.73",
        author: "Gene L. Henderson",
        image: '10.jpg',
        description: "When does life begin?... A well-known book says \"forty\". A well-known radio program says \"eighty\". Some folks say it's mental, others say it's physical. But take the strange case of Mel Carlson who gave a lot of thought to the matter."
    },
    {
        id: 11,
        bookName: "Dracula",
        price: "$4.36",
        author: "Bram Stoker",
        image: "11.jpg",
        description: "Download\n" +
            "\n" +
            "Dracula is an 1897 novel by Irish author Bram Stoker, featuring as its primary antagonist the vampire Count Dracula.\n" +
            "\n" +
            "Dracula has been attributed to many literary genres including vampire literature, horror fiction, the gothic novel and invasion literature. Structurally it is an epistolary novel, that is, told as a series of diary entries and letters. Literary critics have examined many themes in the novel, such as the role of women in Victorian culture, conventional and conservative sexuality, immigration, colonialism, postcolonialism and folklore. "
    },
    {
        id: 12,
        bookName: "Japanese Fairy Tales",
        price: "$3.73",
        author: "Yei Theodora Ozaki",
        image: "12.jpg",
        description: "This collection of Japanese fairy tales is the outcome of a suggestion made to me indirectly through a friend by Mr. Andrew Lang. They have been translated from the modern version written by Sadanami Sanjin. These stories are not literal translations, and though the Japanese story and all quaint Japanese expressions have been faithfully preserved, they have been told more with the view to interest young readers of the West than the technical student of folk-lore."
    },
    {
        id: 13,
        bookName: "Anne of Green Gables",
        price: "$4.53",
        author: "Lucy Maud Montgomery",
        image: "13.jpg",
        description: "Marilla Cuthbert and Matthew Cuthbert, middle-aged siblings who live together at Green Gables, a farm in Avonlea, on Prince Edward Island, decide to adopt a boy from an orphan asylum in Nova Scotia as a helper on their farm. Through a series of mishaps, the person who ends up under their roof is a precocious girl of eleven named Anne Shirley. Anne is bright and quick, eager to please but dissatisfied with her name, her pale countenance dotted with freckles, and with her long braids of red hair. Being a child of imagination, however, Anne takes much joy in life, and adapts quickly, thriving in the environment of Prince Edward Island."
    },
    {
        id: 14,
        bookName: "The War of the Worlds",
        price: "$2.54",
        author: "H. G. Wells",
        image: "14.jpg",
        description: "The War of the Worlds (1898), by H. G. Wells, is an early science fiction novel which describes an invasion of England by aliens from Mars. It is one of the earliest and best-known depictions of an alien invasion of Earth, and has influenced many others, as well as spawning several films, radio dramas, comic book adaptations, and a television series based on the story. The 1938 radio broadcast caused public outcry against the episode, as many listeners believed that an actual Martian invasion was in progress, a notable example of mass hysteria."
    },
    {
        id: 15,
        bookName: "Dream Psychology",
        price: "$3.75",
        author: "Sigmund Freud",
        image: "15.jpg",
        description: "The Interpretation of Dreams is a book by Sigmund Freud. The first edition was first published in German in November 1899 as Die Traumdeutung (though post-dated as 1900 by the publisher). The publication inaugurated the theory of Freudian dream analysis, which activity Freud famously described as \"the royal road to the understanding of unconscious mental processes\"."
    },
]

export default mock;
