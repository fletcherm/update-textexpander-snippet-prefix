(function() {
  var TextExpander, group, i, j, len, len1, macro, newMacro, ref, ref1, regex, snippet;

  TextExpander = Application('TextExpander');

  ref = TextExpander.groups();
  for (i = 0, len = ref.length; i < len; i++) {
    group = ref[i];
    ref1 = group.snippets();
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      snippet = ref1[j];
      regex = /^;/;
      macro = snippet.abbreviation();
      if (macro.match(regex)) {
        newMacro = macro.replace(regex, 'x');
        console.log("Replacing [" + macro + "] with [" + newMacro + "]");
        snippet.abbreviation = newMacro;
      }
    }
  }

}).call(this);
