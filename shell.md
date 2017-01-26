## Windows

### Files
```Shell
# Create a file
type NUL > filename.extension

# Display file contents in a console
type filename
copy filename con

# Move or rename x to y
move x y
copy x y

# Rename file x to y
ren x y

# Combine files content to output file
cat file1 file2 file3 > output.txt
```

### Directory
```Shell
# Display files in a current directory
dir
dir *.js

# Save current directory listing to a file
dir > filename.txt

# Move in the file system
cd ./folder

# Create a directory
mkdir foldername
```

### Deleting
```Shell
del filename/foldername

# Delete all in the current directory
del .
```

### Variables
```Shell
set MYVAR="value"
echo %MYVAR%
```

### Loops
```Shell
for %i in (*.ext) do my-function %i

# /l denotes that the for command will operate numerically,
# rather than operating on a set of files
for /l %x in (1, 1, 10) do (
   echo %x
   copy %x.txt z:\dirname\
)
```

### Miscellaneous
|Symbol|Function|
|---|---|
|?|  Any single character.|
|*|  Any/all characters/files.|
|>|  Writes output to a file or device.|
|»|  Appends output to a file or device.|
|<|  Directs data from a file or device to a program or device.|
|«|  Directs additional data from a file or device to a program or device.|
|\|| Reads the output from one command and writes it to the input of another command (a pipe).|

### Function Keys
|Key|Function|
|---|---|
|F1| Sequential repeat of characters of the previously entered command-line.|
|**F7**| **Displays a history of command-line entries for the current session.**|
|F8| Sequentially displays previous command-line entries.|
