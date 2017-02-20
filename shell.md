`OS` is a layer between a hardware and a software.

## npm
```Shell
# Create a package.json
npm init

# Install
#
## Globally
npm install -g <package>
## Locally
npm install <package>
### To use global module in local project
npm link <package>

# Update
#
## Globally
npm update -g <package>
## Locally
npm update
npm update <package>

# Test outdated packages
#
## Globally
npm outdated -g --depth=0
## Locally
npm outdated

# Uninstall
#
## Globally
npm uninstall -g <package>
## Locally
npm uninstall <package>

# Flags
#
## dependencies (for production)
npm install <package> --save
npm uninstall --save <package>
## devDependencies (for development & testing)
npm install <package> --save-dev
```

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

## Linux
OS frequently used to run servers.

Versions of distribution packages:
- desktop version;
- server version (stripped down, without GUI and additional tools).

### Console
```Shell
# Clear screen
clear

# Help on a command (manual)
man commandName
```

### Files
```Shell
# Create a file
touch /path/to/filename

# Copy file
cp file filecopy
```

### Directory
```Shell
# Print working directory
pwd

# Print list of contents for current directory
ls

# Navigation
cd folder

# Create directory
mkdir dirName
```

### Deleting
```Shell
# Remove a file
rm filename

# Delete empty directory
rmdir dirName

# Delete non-empty directory
rm -r dirName
```

### Administration (Ubuntu)
Note: file associations doesn't mean anything for Linux.

#### Introduction
```Shell
# In Ubuntu u can't login as a root, so
# Super-user do (like run as administrator under Windows)
sudo

# Get some predefined software packages `tasksel`
# (select with spacebar)
sudo tasksel

# Install individual packages
sudo apt-get install <package>
sudo apt-get install apache2

# To uninstall
sudo apt-get remove apache2

# To update installed software
sudo apt-get upgrade
```

#### Services
```Shell
sudo /etc/init.d/apache2 <start, stop, restart>
```

#### Users
```Shell
# Users list
sudo vim /etc/passwd

# Users management
sudo adduser <username>
sudo userdel <username>
sudo passwd <username>
```

#### Permissions
An example is : `777`.
- 1st digit represents `owner` permission;
- 2nd digit represents `users group` permission;
- 3d digit represents `everyone` in the world permission.

Binary numbers permissions:

|1st|2nd|3d|result
|---|---|---|---|
|rwx|rwx|rwx||
|111|111|111|777|
|111|111|101|775|
|111|111|100|774|
|111|111|001|771|
|111|111|000|770|

```Shell
# Modify permission for file
sudo chmod 777 <file>

# Folder and it contents recursively
sudo chmod 777 <folder> -R
```

#### Ownership
```Shell
# Change ownership
sudo chown <username> <filename>
sudo chown <username> <foldername> -R
```

#### Task manager
```Shell
# Like a task manager on Windows
top

# To kill a process
k <process-id>
```

#### VIM - text editor
```Shell
# Openning
#  -Open existing file / create & open file
sudo vim <filename>
#  -Open other file from a VIM
:e <filename>

# Insert mode
#  -Enter
a
#  -Out
ESC

# Search
#  -Search down
:/ *<term>*
# -Search up
:? *<term>*
#  -Next result
n

# Quitting
#  -Quit VIM
:q
# -Force shutdown of VIM
:q!

# Saving
#  -Save & exit
:wq
#  -Save as
:w <fileCopyName>
```

#### Mounting drives
Mounting external hard drives.
```Shell
# 1. Create a folder
sudo mkdir /mnt/<driveName>
sudo mkdir /mnt/drive

# 2. List all connected hard drives
fdisk -l

# 3. Mount drive to a folder
sudo mount <hard id> <folder to mont>
sudo mount /dev/sda3 /mnt/drive

# To unmount
sudo umount /dev/sda3 /mnt/drive
```

#### Network
```Shell
# Info on network cards
ifconfig

# Release & renew IP address
dhclient

# Restart
/etc/init.d/networking {start/stop/restart}

# Control network & IP addresses for network cards on system
/etc/network/interfaces

# Edit DNS info
/etc/resolv.conf/

# Edit host name of computer
/bin/hostname

# Ping
# (just keep pinging until stopped with `Ctrl + C`)
# Ping router with IP 10.1.10.1
ping 10.1.10.1

# Check if DNS is working
ping website.com
```

#### Firewall (UFW)
```Shell
ufw status
ufw default {allow/deny}
ufw {enable/disable}

# Rules for ports
ufw allow 80
ufw deny 22

# Delete a rule
ufw delete {allow/deny} {port}
ufw delete allow 80

# Block or allow IP's
ufw {allow/deny} from {IP}
ufw allow from 210.10.*.*

ufw allow from 210.10.*.* to {port}
ufw allow from 210.10.*.* to 80
```

#### SSH
Secure Shell (SSH) is a network protocol for operating network services securely over an unsecured network (with terminal emulator.).

Installing:
```Shell
apt-get install ssh
```

By default, it uses port 22.
There is a terminal emulator on Windows & other OS's - `Putty`.

#### FTP
```Shell
# Get FTP
apt-get install vsftpd

# Set up
/etc/vsftpd.conf

# Uncomment following:
# local_enable = yes
# write_enable = yes

# Restart
service vsftpd restart
```

#### Backup with TAR
TAR - backup software for Linux.
```Shell
# tar -
# c // create or override backup file
# v // verbose - tell me what is going on during the process
# p // preserve permissions
# z // use compression
# f // create filename with tar

tar -cvpzf backup.tar.gz /var/www

# Excluding directory
tar -cvpzf backup.tar.gz --exclude=/var/www/video /var/www

# Restoring the backup
# tar -
# x // extract
# C // change directory

tar -xvpzf backup.tar.gz -C /recover
```

#### Cron jobs
Cron is a time-based job scheduler in Unix-like computer operating systems.
```Shell
crontab -e
```

|m|h|dom|m|dow|command|
|---|---|---|---|---|---|
|0..59|0..23|1..31|1..12|0..6||
Example:
```
45 5 * * 2 sudo tar -cvpzf backup.tar.gz /var/www
```
