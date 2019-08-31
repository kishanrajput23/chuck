ace.define("ace/mode/chuck_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:"punctuation.definition.comment.chuck",regex:/\/\*\*\//},{token:"punctuation.definition.comment.chuck",regex:/\/\*/,push:[{token:"punctuation.definition.comment.chuck",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.chuck"}]},{token:"punctuation.definition.comment.chuck",regex:/\/\/|<\-\-/,push:[{token:"comment.line.double-slash.chuck",regex:/$/,next:"pop"},{defaultToken:"comment.line.double-slash.chuck"}]},{token:"punctuation.definition.string.begin.chuck",regex:/"/,push:[{token:"punctuation.definition.string.end.chuck",regex:/"/,next:"pop"},{token:"constant.character.escape.chuck",regex:/\\./},{defaultToken:"string.quoted.double.chuck"}]},{token:"support.function.debug.chuck",regex:/<<<|>>>/},{token:"storage.type.chuck",regex:/\b(?:int|float|time|dur|void|same|complex|polar|string)\b/},{token:"keyword.control.chuck",regex:/\b(?:if|else|while|until|for|repeat|break|continue|return|switch|do)\b/},{token:"storage.type.class.chuck",regex:/\b(?:class|interface)\b/},{token:"storage.modifier.class.chuck",regex:/\b(?:extends|public|static|pure|implements|protected|private)\b/},{token:"variable.language.chuck",regex:/\b(?:this|super)\b/},{token:"keyword.control.chuck",regex:/\b(?:function|fun|spork|const|new)\b/},{token:"constant.special.chuck",regex:/\b(?:now|true|false|maybe|null|NULL|me|samp|ms|second|minute|hour|day|week|chout|cherr|dac|adc|blackhole)\b/},{token:"constant.numeric.chuck",regex:/\b(?:\d+|pi)\b/},{token:"keyword.operator.chuck",regex:/=>|=<|@=>|\+=>|\-=>|\*=>|\/=>|%=>|\+\+|\+|\-\-|\-|\*|\/(?!\/)|%|==|!=|<=|>=|<<|>>|<|>|&&|\|\||&|\||\^|\$|::/},{token:"support.class.ugen.chuck",regex:/\b(?:UGen|SinOsc|PulseOsc|SqrOsc|TriOsc|SawOsc|Phasor|Noise|Impulse|Step|Gain|SndBuf2?|HalfRect|FullRect|Mix2|Pan2|GenX|CurveTable|WarpTable|LiSa|Envelope|ADSR|Delay|DelayA|DelayL|Echo|JCRev|NRev|PRCRev|Chorus|Modulate|PitShift|SubNoise|Blit|BlitSaw|BlitSquare|WvIn|WaveLoop|WvOut|OneZero|TwoZero|OnePole|TwoPole|PoleZero|BiQuad|Filter|LPF|HPF|BPF|BRF|ResonZ|Dyno|StkInstrument|BandedWG|BlowBotl|BlowHole|Bowed|Brass|Clarinet|Flute|Mandolin|ModalBar|Moog|Saxofony|Shakers|Sitar|StifKarp|VoicForm|FM|BeeThree|FMVoices|HevyMetl|PercFlut|Rhodey|TubeBell|Wurley|UGen_Multi|UGen_Stereo|Chubgraph|Chugen|FilterBasic|FilterStk|LiSa10|Gen5|Gen7|Gen9|Gen10|Gen17|CNoise|BLT)\b/},{token:"support.class.uana.chuck",regex:/\b(?:UAna|UAnaBlob|Windowing|FFT|IFFT|DCT|IDCT|Centroid|Flux|RMS|RollOff|ZeroX|FeatureCollector|Flip|pilF|AutoCorr|XCorr)\b/},{token:"support.class.library.chuck",regex:/\b(?:Std|Machine|Math|Shred|RegEx|Object)\b/},{token:"support.class.event.chuck",regex:/\b(?:Event|MidiIn|MidiMsg|OscRecv|OscEvent|Hid|HidMsg|MidiOut|OscOut|OscIn|OscMsg)\b/},{token:"support.class.io.chuck",regex:/\b(?:IO|FileIO|StdOut|StdErr|SerialIO|MidiFileIn|KBHit)\b/},{token:"support.class.chugin.chuck",regex:/\b(?:ABSaturator|AmbPan3|Binaural|Bitcrusher|Elliptic|ExpDelay|ExpEnv|Faust|FluidSynth|FoldbackSaturator|GVerb|KasFilter|LADSPA|MagicSine|Mesh2D|Multicomb|NHHall|Overdrive|Pan4|Pan8|Pan16|Perlin|PitchTrack|PowerADSR|Random|Sigmund|Spectacle|Wavetable|WinFuncEnv|WPDiodeLadder|WPKorg35)\b/},{token:["text","text","entity.name.function.chuck"],regex:/(\.)(\s*)([a-zA-Z_$][\w$]*)/},{token:["entity.name.function.chuck","text","text"],regex:/([A-Za-z_$][\w$]*)(\s*)(\()/}]},this.normalizeRules()};s.metaData={scopeName:"source.chuck",name:"ChucK",fileTypes:["ck"]},r.inherits(s,i),t.ChucKHighlightRules=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),ace.define("ace/mode/chuck",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/chuck_highlight_rules","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./chuck_highlight_rules").ChucKHighlightRules,o=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=s,this.foldingRules=new o};r.inherits(u,i),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/chuck"}.call(u.prototype),t.Mode=u});
                (function() {
                    ace.require(["ace/mode/chuck"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            