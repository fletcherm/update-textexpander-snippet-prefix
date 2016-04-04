require 'rubygems'
require 'bundler/setup'
Bundler.require

require 'rake/clean'
require 'erb'

BASENAME = 'update-snippet-prefix'
SCRIPT_FILENAME = "#{BASENAME}.js"

rule '.js' => '.coffee' do |t|
  File.open(t.name, 'w') do |name|
    name.print CoffeeScript.compile(File.read(t.source))
  end
end

desc 'Run the script.'
task run: SCRIPT_FILENAME do
  sh "osascript -l JavaScript #{SCRIPT_FILENAME}"
end

desc 'Print help instuctions.'
task :help do
  puts "Use `rake run` to compile & run the script."
end

task default: SCRIPT_FILENAME

CLEAN.include FileList['*.js']
