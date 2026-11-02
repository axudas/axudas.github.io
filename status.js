/* Auto-updates course and graduation status by date (UGA Registrar calendar).
   Fall 2026: Aug 17 - Dec 9, 2026. Spring 2027: Jan 11 - May 4, 2027. */
(function(){
var TERMS={fall2026:['2026-08-17','2026-12-09'],spring2027:['2027-01-11','2027-05-04']};
var LABEL={planned:'Planned',current:'In progress',done:''};
var now=new Date();
function day(s,end){return new Date(s+(end?'T23:59:59':'T00:00:00')+'-05:00')}
function state(t){var r=TERMS[t];if(!r)return 'done';if(now<day(r[0]))return 'planned';if(now<=day(r[1],1))return 'current';return 'done'}
var els=document.querySelectorAll('[data-term]');
for(var i=0;i<els.length;i++){var el=els[i],s=state(el.getAttribute('data-term'));el.setAttribute('data-state',s);if(el.classList.contains('status'))el.textContent=LABEL[s]}
var sw=document.querySelectorAll('[data-on]');
for(var j=0;j<sw.length;j++){var e=sw[j];if(now>=day(e.getAttribute('data-on'))){e.textContent=e.getAttribute('data-after');e.classList.add('switched')}}
})();
