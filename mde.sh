#!/bin/bash
totalCalls = grep -R "SCapiService\." app/public/js *.js | grep -c "app/public/js/"
unwrappedCalls = $(grep -R "SCapiService.get(" app/public/js *.js | grep -c "app/public/js/")
wrappedCalls = $(( totalCalls - unwrappedCalls ))
echo $(( wrappedCalls / totalCalls))
