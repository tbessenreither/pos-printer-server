
const helperTable = {
    // Feed control sequences
    CTL_LF     : Buffer.from([0x0a]),              // Print and line feed
    CTL_FF     : Buffer.from([0x0c]),              // Form feed
    CTL_CR     : Buffer.from([0x0d]),              // Carriage return
    CTL_HT     : Buffer.from([0x09]),              // Horizontal tab
    CTL_SET_HT : Buffer.from([0x1b, 0x44]),          // Set horizontal tab positions
    CTL_VT     : Buffer.from([0x1b, 0x64, 0x04]),      // Vertical tab
	
	//PRINTER_HALFSPEED_OFF	: Buffer.from([0x1B, 0x73, 0x30]),
	//PRINTER_HALFSPEED_ON	: Buffer.from([0x1B, 0x73, 0x31]),
	
	PRINTER_INIT	: Buffer.from([27,64]),

    // Printer hardware
    HW_INIT    : Buffer.from([0x1b, 0x40]),          // Clear data in buffer and reset modes
    HW_SELECT  : Buffer.from([0x1b, 0x3d, 0x01]),      // Printer select
    HW_RESET   : Buffer.from([0x1b, 0x3f, 0x0a, 0x00]),  // Reset printer hardware
    BEEP       : Buffer.from([0x1b, 0x1e]),              // Sounds built-in buzzer (if equipped)
    UPSIDE_DOWN_ON  : Buffer.from([0x1b,0x7b,0x01]),     // Upside down printing ON (rotated 180 degrees).
    UPSIDE_DOWN_OFF : Buffer.from([0x1b,0x7b,0x00]),     // Upside down printing OFF (default).

    // Cash Drawer
    CD_KICK_2  : Buffer.from([0x1b, 0x70, 0x00]),      // Sends a pulse to pin 2 []
    CD_KICK_5  : Buffer.from([0x1b, 0x70, 0x01]),      // Sends a pulse to pin 5 []

    // Paper
    PAPER_FULL_CUT  : Buffer.from([0x1d, 0x56, 0x00]), // Full cut paper
    PAPER_PART_CUT  : Buffer.from([0x1d, 0x56, 0x01]), // Partial cut paper

    // Text format
    TXT_NORMAL      : Buffer.from([0x1b, 0x21, 0x00]), // Normal text
    TXT_2HEIGHT     : Buffer.from([0x1b, 0x21, 0x10]), // Double height text
    TXT_2WIDTH      : Buffer.from([0x1b, 0x21, 0x20]), // Double width text
    TXT_4SQUARE     : Buffer.from([0x1b, 0x21, 0x30]), // Quad area text
    TXT_UNDERL_OFF  : Buffer.from([0x1b, 0x2d, 0x00]), // Underline font OFF
    TXT_UNDERL_ON   : Buffer.from([0x1b, 0x2d, 0x01]), // Underline font 1-dot ON
    TXT_UNDERL2_ON  : Buffer.from([0x1b, 0x2d, 0x02]), // Underline font 2-dot ON
    TXT_BOLD_OFF    : Buffer.from([0x1b, 0x45, 0x00]), // Bold font OFF
    TXT_BOLD_ON     : Buffer.from([0x1b, 0x45, 0x01]), // Bold font ON
    TXT_INVERT_OFF  : Buffer.from([0x1d, 0x42, 0x00]), // Invert font OFF (eg. white background)
    TXT_INVERT_ON   : Buffer.from([0x1d, 0x42, 0x01]), // Invert font ON (eg. black background)
    TXT_FONT_A      : Buffer.from([0x1b, 0x4d, 0x00]), // Font type A
    TXT_FONT_B      : Buffer.from([0x1b, 0x4d, 0x01]), // Font type B
    TXT_ALIGN_LT    : Buffer.from([0x1b, 0x61, 0x00]), // Left justification
    TXT_ALIGN_CT    : Buffer.from([0x1b, 0x61, 0x01]), // Centering
    TXT_ALIGN_RT    : Buffer.from([0x1b, 0x61, 0x02]), // Right justification

    // Char code table
    CHARCODE_USA        : Buffer.from([0x1b, 0x52, 0x00]), // USA
    CHARCODE_FRANCE     : Buffer.from([0x1b, 0x52, 0x01]), // France
    CHARCODE_GERMANY    : Buffer.from([0x1b, 0x52, 0x02]), // Germany
	CHARTABLE_GERMANY	: Buffer.from([0x1b, 0x74, 0x19]),
    CHARCODE_UK         : Buffer.from([0x1b, 0x52, 0x03]), // U.K.
    CHARCODE_DENMARK1   : Buffer.from([0x1b, 0x52, 0x04]), // Denmark I
    CHARCODE_SWEDEN     : Buffer.from([0x1b, 0x52, 0x05]), // Sweden
    CHARCODE_ITALY      : Buffer.from([0x1b, 0x52, 0x06]), // Italy
    CHARCODE_SPAIN1     : Buffer.from([0x1b, 0x52, 0x07]), // Spain I
    CHARCODE_JAPAN      : Buffer.from([0x1b, 0x52, 0x08]), // Japan
    CHARCODE_NORWAY     : Buffer.from([0x1b, 0x52, 0x09]), // Norway
    CHARCODE_DENMARK2   : Buffer.from([0x1b, 0x52, 0x0A]), // Denmark II
    CHARCODE_SPAIN2     : Buffer.from([0x1b, 0x52, 0x0B]), // Spain II
    CHARCODE_LATINA     : Buffer.from([0x1b, 0x52, 0x0C]), // Latin America
    CHARCODE_KOREA      : Buffer.from([0x1b, 0x52, 0x0D]), // Korea
    CHARCODE_SLOVENIA   : Buffer.from([0x1b, 0x52, 0x0E]), // Slovenia
    CHARCODE_CHINA      : Buffer.from([0x1b, 0x52, 0x0F]), // China
    CHARCODE_VIETNAM    : Buffer.from([0x1b, 0x52, 0x10]), // Vietnam
    CHARCODE_ARABIA     : Buffer.from([0x1b, 0x52, 0x11]), // ARABIA


    // Barcode format
    BARCODE_TXT_OFF : Buffer.from([0x1d, 0x48, 0x00]), // HRI barcode chars OFF
    BARCODE_TXT_ABV : Buffer.from([0x1d, 0x48, 0x01]), // HRI barcode chars above
    BARCODE_TXT_BLW : Buffer.from([0x1d, 0x48, 0x02]), // HRI barcode chars below
    BARCODE_TXT_BTH : Buffer.from([0x1d, 0x48, 0x03]), // HRI barcode chars both above and below
    BARCODE_FONT_A  : Buffer.from([0x1d, 0x66, 0x00]), // Font type A for HRI barcode chars
    BARCODE_FONT_B  : Buffer.from([0x1d, 0x66, 0x01]), // Font type B for HRI barcode chars
    BARCODE_HEIGHT  : Buffer.from([0x1d, 0x68, 0x64]), // Barcode Height [1-255]
    BARCODE_WIDTH   : Buffer.from([0x1d, 0x77, 0x03]), // Barcode Width  [2-6]
    BARCODE_UPC_A   : Buffer.from([0x1d, 0x6b, 0x00]), // Barcode type UPC-A
    BARCODE_UPC_E   : Buffer.from([0x1d, 0x6b, 0x01]), // Barcode type UPC-E
    BARCODE_EAN13   : Buffer.from([0x1d, 0x6b, 0x02]), // Barcode type EAN13
    BARCODE_EAN8    : Buffer.from([0x1d, 0x6b, 0x03]), // Barcode type EAN8
    BARCODE_CODE39  : Buffer.from([0x1d, 0x6b, 0x04]), // Barcode type CODE39
    BARCODE_ITF     : Buffer.from([0x1d, 0x6b, 0x05]), // Barcode type ITF
    BARCODE_NW7     : Buffer.from([0x1d, 0x6b, 0x06]), // Barcode type NW7


    // QR Code
    QRCODE_MODEL1: Buffer.from([0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, 0x31, 0x00]), // Model 1
    QRCODE_MODEL2: Buffer.from([0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, 0x32, 0x00]), // Model 2
    QRCODE_MODEL3: Buffer.from([0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, 0x33, 0x00]), // Model 3

    QRCODE_CORRECTION_L: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x30]), // Correction level: L - 7%
    QRCODE_CORRECTION_M: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x31]), // Correction level: M - 15%
    QRCODE_CORRECTION_Q: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x32]), // Correction level: Q - 25%
    QRCODE_CORRECTION_H: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x33]), // Correction level: H - 30%

    QRCODE_CELLSIZE_1: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x01]),   // Cell size 1
    QRCODE_CELLSIZE_2: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x02]),   // Cell size 2
    QRCODE_CELLSIZE_3: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x03]),   // Cell size 3
    QRCODE_CELLSIZE_4: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x04]),   // Cell size 4
    QRCODE_CELLSIZE_5: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x05]),   // Cell size 5
    QRCODE_CELLSIZE_6: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x06]),   // Cell size 6
    QRCODE_CELLSIZE_7: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x07]),   // Cell size 7
    QRCODE_CELLSIZE_8: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x08]),   // Cell size 8

    QRCODE_PRINT: Buffer.from([0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x51, 0x30]),        // Print QR code


    // Image format
    S_RASTER_N      : Buffer.from([0x1d, 0x76, 0x30, 0x00]), // Set raster image normal size
    S_RASTER_2W     : Buffer.from([0x1d, 0x76, 0x30, 0x01]), // Set raster image double width
    S_RASTER_2H     : Buffer.from([0x1d, 0x76, 0x30, 0x02]), // Set raster image double height
    S_RASTER_Q      : Buffer.from([0x1d, 0x76, 0x30, 0x03]), // Set raster image quadruple

    // Printing Density
    PD_N50          : Buffer.from([0x1d, 0x7c, 0x00]), // Printing Density -50%
    PD_N37          : Buffer.from([0x1d, 0x7c, 0x01]), // Printing Density -37.5%
    PD_N25          : Buffer.from([0x1d, 0x7c, 0x02]), // Printing Density -25%
    PD_N12          : Buffer.from([0x1d, 0x7c, 0x03]), // Printing Density -12.5%
    PD_0            : Buffer.from([0x1d, 0x7c, 0x04]), // Printing Density  0%
    PD_P50          : Buffer.from([0x1d, 0x7c, 0x08]), // Printing Density +50%
    PD_P37          : Buffer.from([0x1d, 0x7c, 0x07]), // Printing Density +37.5%
    PD_P25          : Buffer.from([0x1d, 0x7c, 0x06]), // Printing Density +25%
	
	CTRLChars: [Buffer.from([0x1b]).toString('ascii'), Buffer.from([0x1d]).toString('ascii')]
};


module.exports = {
	charset: Buffer.from([0x1b, 0x52, 0x02, 0x1b, 0x74, 0x19]).toString('ascii'),
	font: {
		a: helperTable.TXT_FONT_A.toString('ascii'),
		b: helperTable.TXT_FONT_B.toString('ascii')
	},
	align: {
		left: helperTable.TXT_ALIGN_LT.toString('ascii'),
		center: helperTable.TXT_ALIGN_CT.toString('ascii'),
		right: helperTable.TXT_ALIGN_RT.toString('ascii')
	},
	bold: { //not working
		on: helperTable.TXT_BOLD_ON.toString('ascii'),
		off: helperTable.TXT_BOLD_OFF.toString('ascii')
	},
	underline: {
		on: helperTable.TXT_UNDERL_ON.toString('ascii'),
		off: helperTable.TXT_UNDERL_OFF.toString('ascii'),
		double: helperTable.TXT_UNDERL2_ON.toString('ascii')
	},
	size: {
		normal: helperTable.TXT_NORMAL.toString('ascii'),
		high: helperTable.TXT_2HEIGHT.toString('ascii'),
		wide: helperTable.TXT_2WIDTH.toString('ascii'),
		big: helperTable.TXT_4SQUARE
	},
	inverted: {
		on: helperTable.TXT_INVERT_ON.toString('ascii'),
		off: helperTable.TXT_INVERT_OFF.toString('ascii')
	},
	reset: helperTable.TXT_FONT_A.toString('ascii') + helperTable.TXT_ALIGN_LT.toString('ascii') + helperTable.TXT_BOLD_OFF.toString('ascii') + helperTable.TXT_UNDERL_OFF.toString('ascii') + helperTable.TXT_NORMAL.toString('ascii') + helperTable.TXT_INVERT_OFF.toString('ascii')
};
