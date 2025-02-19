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
# be sure to "chmod +x compress_mp4.sh" to make it executable
# *********************************************************************

#!/bin/bash

for file in *.mp4 *.mov; do 
    [ -e "$file" ] || continue
    output="${file%.*}_compressed.mp4"
    echo "Processing: $file → $output"

    # Compress with H.264 (libx264) and AAC audio
    ffmpeg -y -i "$file" -vcodec libx264 -crf 23 -preset slow -c:a aac -b:a 128k "$output"

    echo "Finished: $output"
done

echo "All files compressed!"
