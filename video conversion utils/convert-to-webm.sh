#!/bin/bash
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

# *********************************************************************
# be sure to "chmod +x convert-to-webm.sh" to make it executable
# *********************************************************************

#!/bin/bash

for file in *.mp4 *.mov; do 
    [ -e "$file" ] || continue
    output="${file%.*}.webm"
    echo "Processing: $file → $output"

    # First pass (force overwrite)
    ffmpeg -y -i "$file" -c:v libvpx-vp9 -b:v 1M -pass 1 -an -f webm /dev/null

    # Second pass (force overwrite)
    ffmpeg -y -i "$file" -c:v libvpx-vp9 -b:v 1M -pass 2 -c:a libopus "$output"

    echo "Finished: $output"
done

echo "All files converted!"
