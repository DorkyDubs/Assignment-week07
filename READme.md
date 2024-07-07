🎯 Please mention the requirements you met and which goals you achieved for this assignment.

using sql and join queires to build a site which allows users to post and view on a range of topics and filter between subjects as well as add there own

🎯 Were there any requirements or goals that you were not quite able to achieve?
didn't add delete or edit functionality, doesn't look pretty and isn't optimised, dynamic routing isn't quite where it could be.

Also thought about adding a number of posts counts to each category, using it to map the top five into nav bar but never got around to implementing it.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
routing, sql joining didn't work as expected, render being rubbish, not making typos

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

It'd be nice to have an extra day to clean these up.
It isn't populated properly, looks mismanaged as all time went to bug fixing, but feel free to add some content.

What went really well and what could have gone better?

It's got good base functionality, but looks bland. Things could be taken further without too much trouble. dynamic routes for specific topics need reworking but happy it's possible to add a new topic and populate it without any added issues.

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

See attributions.md
also Alex and Theo helped a bunch.
Tim tried to elp, but couldn't figure it out how to use that kowledge in the end

Describing errors or bugs you encountered while completing your assignment.

I'd hoped to implement dynamic routing and endpoints with descriptive terms however had issues when using them with SQL queries and joining and so replaced them with a direct reference to the id numbers, which should have been something that could have been handled.

When mapping posts it took id from category table to use as the key when using item.id, rather than from posts. chainging the column name solved this problem, but not sure why the confusion occured or was included due tothe join. ight be possible to write in a way which defines the table we want it from when using it in the mappingm but went with this method to fix.

Requesting feedback about a specific part of your submission.

Are there simpler methods for SQLing. looking at the adding of a topic title to the filtered pages kept running into issues and final solution is bit complex, although basically one of the first things I attempted before render links seemd to be miss behaving and set me back solving that issue. hope its behaving when you try see it.
