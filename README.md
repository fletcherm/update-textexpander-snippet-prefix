# Description

This script automatically updates my TextExpander snippets to begin with `x` instead of `;`.

## Required software

* OS X 10.11. It may also work on 10.10.
* Ruby 2.3. Probably works with older version.
* Bundler. Probably works with most versions.

## How to use

1. Clone this repository.
1. `bundle install`
1. `bundle exec rake` - compiles the script.
1. `bundle exec run` - runs the script.
1. `bundle exec help` or `bundle exec rake -T` for more information.

## Context

I've become a TextExpander addict on my desktop. Thus when I'm on my iOS device, I'm infuriated when my snippets are not available.

There is a TextExpander app for iOS, but using `;` as my snippet prefix is cumbersome to use with the iOS keyboard.

One suggestion I heard is to use a different prefix, like `x`, so that it's easier to type on OS X. But I have 69 snippets and don't want to manually go edit all of them.

This OS X automation does that for me automatically.
