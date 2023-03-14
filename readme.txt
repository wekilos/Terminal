95.85.120.149
root
G9T0fGH274Vj
port 22



name=CentOS-$releasever - Updates
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
#baseurl=http://mirror.centos.org/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
#baseurl=http://mirror.centos.org/centos/$releasever/extras/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7


#released updates
[updates]
name=CentOS-$releasever - Updates
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
#baseurl=http://mirror.centos.org/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7





#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra
#baseurl=http://mirror.centos.org/centos/$releasever/centosplus/$basearch/
gpgcheck=1
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#released updates
[updates]
name=CentOS-$releasever - Updates
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
#baseurl=http://mirror.centos.org/centos/$releasever/updates/$basearch/
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7





<auth>
<point id="cc4ec5ed-c96a-4eab-869f-7b159660ff79" name="???">
<key>
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAN1Z6QwxvebV7ti37Seo3u7uCeu8
+izxS9py/BuRQ9J3DaQFfoVu+m4XEDB7kFK/Ms1rMmcxA4Ki/iKXsDT2Rw9Gdf4npEhRkUGUNMeg
famu/Sy4PAe7/WJ74HH58icnoa6CysmAxFgcMK094RwS3AxvWzkTFv1f23jK0ScLvNIZAgMBAAEC
gYEAzR2WAYDOkuvHqve1Qb0Q6KOYeeTih2cKfWF0ES+pg4xjDY0x0wAl/IJOtD6sXKFkuEoPqOQY
dqQHj5K07D8TVHEuTIpcJcywL5K4Is1KhxqTSpf6tFYV6TCq8ALOSaRYdrmel3zP7Y8QBqN/4JT5
MRfUqgdshpeNAFay2DMdgKkCQQDu7lA50/YGndVpXXQYJAEHR5hfZyNGGlxI2qgL0CyrUgrfXQEc
Jnh3qpYoofQfwZuNgV6Aq2hkBwYHmsHsDNKTAkEA7SoXOfL0T8PQHDTgQuIzo9RYyWkWRB520KBu
bIAHtfXOEe8Fizk+FHGhRgiIZwB7e9tQGtPcqWVH4GUQXHDYIwJALGXYPoamhuA5UdTtx7aZAlNJ
eyDdKx+m2lrXMyrBwiwCnTLZC/QSGpp2QKKnjGcbkpXhi6NOSJgNhMg7FLPlRQJBANV3CSjTkSsq
aGq6/Q+2YhyXyMKgn7X4ZaEqhbmLE2WoNS7XIPpLL6FfFXXfwEZVnM/Certq7jZaPvOug6dwulkC
QDQWw66sqH/+bWjCQoG+0Ui1hTZo8eH6wgiB9Ls5hDVnpzSJgzEUfpAJThGT8A5RaPMGIRtKpK9k
dApTk5BDQK0=
</key>
</point>
<server ip="119.235.116.165" port="5556" http_port="80">
<key>
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmjGYmQYsyvh++NhTYgI7gq6L4+a2MaOfL0iQW
BfNnTAr76GcvXrfxK/r1q9L2gUTzFShFO9uk1ctlP2n8e5dra7JQjSxIZyFEvswUl3lliI/X7F0k
ltqRB+UkgiBoSl+OvFCl7KqDyccUG2OMCvPlxGnskQY1/FzvyectJGo0sQIDAQAB</key>
</server>
</auth>

MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmjGYmQYsyvh++NhTYgI7gq6L4+a2MaOfL0iQW
BfNnTAr76GcvXrfxK/r1q9L2gUTzFShFO9uk1ctlP2n8e5dra7JQjSxIZyFEvswUl3lliI/X7F0k
ltqRB+UkgiBoSl+OvFCl7KqDyccUG2OMCvPlxGnskQY1/FzvyectJGo0sQIDAQAB

MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAN1Z6QwxvebV7ti37Seo3u7uCeu8
+izxS9py/BuRQ9J3DaQFfoVu+m4XEDB7kFK/Ms1rMmcxA4Ki/iKXsDT2Rw9Gdf4npEhRkUGUNMeg
famu/Sy4PAe7/WJ74HH58icnoa6CysmAxFgcMK094RwS3AxvWzkTFv1f23jK0ScLvNIZAgMBAAEC
gYEAzR2WAYDOkuvHqve1Qb0Q6KOYeeTih2cKfWF0ES+pg4xjDY0x0wAl/IJOtD6sXKFkuEoPqOQY
dqQHj5K07D8TVHEuTIpcJcywL5K4Is1KhxqTSpf6tFYV6TCq8ALOSaRYdrmel3zP7Y8QBqN/4JT5
MRfUqgdshpeNAFay2DMdgKkCQQDu7lA50/YGndVpXXQYJAEHR5hfZyNGGlxI2qgL0CyrUgrfXQEc
Jnh3qpYoofQfwZuNgV6Aq2hkBwYHmsHsDNKTAkEA7SoXOfL0T8PQHDTgQuIzo9RYyWkWRB520KBu
bIAHtfXOEe8Fizk+FHGhRgiIZwB7e9tQGtPcqWVH4GUQXHDYIwJALGXYPoamhuA5UdTtx7aZAlNJ
eyDdKx+m2lrXMyrBwiwCnTLZC/QSGpp2QKKnjGcbkpXhi6NOSJgNhMg7FLPlRQJBANV3CSjTkSsq
aGq6/Q+2YhyXyMKgn7X4ZaEqhbmLE2WoNS7XIPpLL6FfFXXfwEZVnM/Certq7jZaPvOug6dwulkC
QDQWw66sqH/+bWjCQoG+0Ui1hTZo8eH6wgiB9Ls5hDVnpzSJgzEUfpAJThGT8A5RaPMGIRtKpK9k
dApTk5BDQK0=