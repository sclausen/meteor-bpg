# Introduction

BPG (Better Portable Graphics) is a new image format. Its purpose is to replace the JPEG image format when quality or file size is an issue. Its main advantages are:
  - High compression ratio. Files are much smaller than JPEG for similar quality.
  - **Supported by most Web browsers with a small Javascript decoder (gzipped size: 72 KB).**
  - Based on a subset of the HEVC open video compression standard.
  - Supports the same chroma formats as JPEG (grayscale, YCbCr 4:2:0, 4:2:2, 4:4:4) to reduce the losses during the conversion. An alpha channel is supported. The RGB, YCgCo and CMYK color spaces are also supported.
  - Native support of 8 to 14 bits per channel for a higher dynamic range.
  - Lossless compression is supported.
  - Various metadata (such as EXIF, ICC profile, XMP) can be included.

# Technical information

The specification of the BPG file format is available [here](http://bellard.org/bpg/bpg_spec.txt) and the main article about bpg is [here](http://bellard.org/bpg/).

# LICENSE

- libbpg and bpgenc are released under the LGPL license (the FFmpeg
 part is under the LGPL, the BPG specific part is released under
 the BSD license).

- bpgenc is released under the BSD license (it includes the JCTVC
 code which is released under the BSD license. The BPG specific
 part is released under the BSD license).

- BPG relies on the HEVC compression technology which may be
 protected by patents in some countries. Most devices already
 include or will include hardware HEVC support, so we suggest to
 use it if patents are an issue.
