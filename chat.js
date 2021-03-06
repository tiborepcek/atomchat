/*
 * PHP Version 5 and above
 *
 * JavaScript helper
 *
 * @category  PHP_Chat
 * @package   PHP_Atomchat
 * @author    P H Claus <phhpro@gmail.com>
 * @copyright 2015 - 2019 P H Claus
 * @license   https://www.gnu.org/licenses/gpl-3.0.en.html GPLv3
 * @version   GIT: Latest
 * @link      https://github.com/phhpro/atomchat
 */

//** Character counter
function chars(chat)
{
    if (chat.text.value.length >= char) {
        chat.txta.value = chat.text.value.substring(0, text);
    } else {
        chat.txta.value = char - chat.text.value.length;
    }
}

//** Insert emoji from hover menu
function emo(str)
{
    var txt = document.getElementById("text");
    var str = document.getElementById(str).value;

    if (document.selection) {
        txt.focus();
        var sel = document.selection.createRange();
        sel.str = str;
        txt.focus();
    } else if (txt.selectionStart || txt.selectionStart === 0) {
        var beg   = txt.selectionStart;
        var end   = txt.selectionEnd;
        var top   = txt.top;
        txt.value = txt.value.substring(0, beg) + str +
                    txt.value.substring(end, txt.value.length);
        txt.focus();
        txt.selectionStart = beg + str.length;
        txt.selectionEnd   = beg + str.length;
        txt.top            = top;
    } else {
        txt.value += str;
        txt.focus();
    }
}

//** Select text of given ID
function selectText(id)
{
    var rng = document.createRange();
        rng.selectNodeContents(id);

    var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng);
}

//** Select ID to select text from
function selectID(id)
{
    var id = document.getElementById(id);
    selectText(id);
}


/*
 * As of v20190322 AJAX has been replaced with SSE, making the below
 * section obsolete. It's kept here for the time being as a fallback
 * if your main audience uses MSIE and you'd rather revert to AJAX
 * because MSIE has very poor support for server sent events and may
 * well throw an error and exit. To revrt to AJAX:
 *
 * - Uncomment the below section.
 * - Edit the "chatlog screen" section in index.php.
 */


/*
var http = null;

//** Check browser support
function ajax()
{
    if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        alert("Your browser doesn't support AJAX!");
        return null;
    }
}

//** Pseudo push new content
function push()
{
    http = ajax();
    data = data;

    if (http != null) {
        http.open("POST", data);

        http.onreadystatechange = function()
        {
            if (http.readyState == 4) {
                document.getElementById("push").innerHTML
                    = http.responseText;
            }
        }

        http.send();
    }

    setTimeout('push()', (1000 * rate));
}

//** Init polling
push();
*/
