function showlatestpostswiththumbs(t) {
    document.write('<ul class="recent-posts-container">');
    for (var e = 0; e < posts_no; e++) {
        var r,
            n = t.feed.entry[e],
            i = n.title.$t;
        if (e == t
                .feed
                .entry
                .length) 
            break;
        
        for (var o = 0; o < n.link.length; o++) {
            if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) 
                var l = n.link[o].title,
                    m = n.link[o].href;
            
            if ("alternate" == n.link[o].rel) {
                r = n.link[o].href;
                break
            }
        }
        var u;
        try {
            u = n.media$thumbnail.url
        } catch (p) {
            s = n.content.$t,
            a = s.indexOf("<img"),
            b = s.indexOf('src="', a),
            c = s.indexOf('"', b + 5),
            d = s.substr(b + 5, c - b - 5),
            u = -1 != a && -1 != b && -1 != c && "" != d
                ? d
                : "https://andaiminhgroup.github.io/images/Partner_ATD.png"
        }
        var h = n.published.$t,
            f = h.substring(0, 4),
            w = h.substring(5, 7),
            v = h.substring(8, 10),
            A = new Array;
        A[1] = "Jan",
        A[2] = "Feb",
        A[3] = "Mar",
        A[4] = "Apr",
        A[5] = "May",
        A[6] = "Jun",
        A[7] = "Jul",
        A[8] = "Aug",
        A[9] = "Sep",
        A[10] = "Oct",
        A[11] = "Nov",
        A[12] = "Dec",
        document.write('<li class="recent-posts-list">'),
        1 == posts_date && document.write('<div class="post-date">' + A[parseInt(w, 10)] + " " + v + " " + f + "</div>"),
        1 == showpoststhumbs && document.write('<a href="' + r + '"><img class="recent-post-thumb" src="' + u + '"/></a>'),
        document.write('<div class="recent-post-title"><a href="' + r + '" target ="_top">' + i + "</a></div>");
        var g = "",
            k = 0;
        document.write('<div class="recent-posts-details">'),
        1 == showcommentslink && (1 == k && (g += " <br> "), "1 Comments" == l && (l = "1 Comment"), "0 Comments" == l && (l = "No Comments"), l = '<a href="' + m + '" target ="_top">' + l + "</a>", g += l, k = 1),
        1 == readmorelink && (1 == k && (g += " | "), g = g + '<a class="readmorelink" href="' + r + '" class="url" target ="_top">Read more</a>', k = 1),
        document.write(g),
        document.write("</div>"),
        document.write("</li>")
    }
    document.write("</ul>")
}
