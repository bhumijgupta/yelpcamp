var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
data = [{
        name: "Carefree trek",
        image: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget augue magna. Sed eu vulputate libero. Maecenas varius commodo dui, ac iaculis justo dictum dictum. Suspendisse urna diam, feugiat in rhoncus vitae, laoreet malesuada justo. Suspendisse scelerisque, tortor sed aliquam sagittis, tellus metus vestibulum neque, at maximus nulla arcu vel purus. Suspendisse ut erat vel massa varius mollis. Sed feugiat, risus ut efficitur fringilla, lectus urna luctus ante, quis luctus quam nulla ut arcu. Donec tristique sapien ut cursus porttitor. Nullam tincidunt ultricies libero, congue molestie dui mattis sit amet. Nam non cursus lectus."
    },
    {
        name: "Sandy duna",
        image: "https://images.unsplash.com/photo-1482355347028-ff60443f60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget augue magna. Sed eu vulputate libero. Maecenas varius commodo dui, ac iaculis justo dictum dictum. Suspendisse urna diam, feugiat in rhoncus vitae, laoreet malesuada justo. Suspendisse scelerisque, tortor sed aliquam sagittis, tellus metus vestibulum neque, at maximus nulla arcu vel purus. Suspendisse ut erat vel massa varius mollis. Sed feugiat, risus ut efficitur fringilla, lectus urna luctus ante, quis luctus quam nulla ut arcu. Donec tristique sapien ut cursus porttitor. Nullam tincidunt ultricies libero, congue molestie dui mattis sit amet. Nam non cursus lectus."
    }
]

function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed Campgrounds");
            // Create new data
            data.forEach(seed => {
                Campground.create(seed, (err, campground) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Added a campground");
                        Comment.create({
                            text: "This place  is great",
                            author: "Homer"
                        }, (err, comment) => {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Commment Added");
                            }
                        })
                    }
                });
            });
        }
    });
}

module.exports = seedDB;