TextExpander = Application('TextExpander')
for group in TextExpander.groups()
  for snippet in group.snippets()
    regex = /^;/
    macro = snippet.abbreviation()
    if macro.match(regex)
      newMacro = macro.replace(regex, 'x')
      console.log "Replacing [#{macro}] with [#{newMacro}]"
      snippet.abbreviation = newMacro
