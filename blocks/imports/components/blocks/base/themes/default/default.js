///// BLOCKS THEME CONFIG /////

const DEBUG = 0;

// FONTS //
import "./fonts.css";

const fonts = {
	common: "Rubik",
	mono: "Montserrat",
}

// COLORS //
export const colors = {
	random: () => { return 'hsl(' + Math.floor(Math.random() * 256)+', 80%, 60%)'  },
	white: 'hsl(0, 0%, 100%)',
	black: 'hsl(0, 0%,   0%)',
	grey: {
		lightest: 'hsl(0, 0%, 97%)',
		lighter: 'hsl(0, 0%, 90%)',
		light: 'hsl(0, 0%, 60%)',
		base:  'hsl(0, 0%, 50%)',
		dark:  'hsl(0, 0%, 30%)',
	},
	orange: {
		light: 'hsl(40,  92%, 70%)',
		base:  'hsl(40, 100%, 60%)',
		dark:  'hsl(36, 100%, 59%)',
	},
	red: {
		light: 'hsl(10, 100%, 63%)',
		base:  'hsl(10, 100%, 55%)',
		dark:  'hsl(15, 100%, 46%)',
	},
	blue: {
		light: 'hsl(203,  90%, 57%)',
		base:  'hsl(205,  87%, 49%)',
		dark:  'hsl(205, 100%, 42%)',
	},
	green: {
		light: 'hsl(102, 57%, 65%)',
		base:  'hsl(102, 61%, 54%)',
		dark:  'hsl(102, 56%, 48%)',
	},
}


// TYPOGRAPHY //
export const Typography = {};

Typography.SectionHeading = {
	styles: {
		_base: {
			fontFamily: fonts.common,
			fontSize: '26px',
		}
	}
}
Typography.Heading = {
	styles: {
		_base: {
			fontFamily: fonts.common,
			fontSize: '20px',
		}
	}
}
Typography.Paragraph = {
	styles: {
		_base: {
			fontFamily: fonts.common,
			fontSize: '14px',
			lineHeight: '20px',
		}
	}
}
Typography.ALink = {
	styles: {
		_base: {
			color: colors.black,
			"text-decoration": "none",
			fontFamily: fonts.common,
		}
	}
}


// TAGS //
export const Tags = {};

Tags.Tag = {
	defaults: {
		style: "light",
	},
	styles: {
		_base: {
			fontFamily: fonts.common,
			fontSize: 12,
			padding: '3px 8px',
			borderRadius: 3,
			marginRight: 4,
			fontWeight: '300',
			color: colors.white,
			cursor: "default",
		},
		light:  {
			backgroundColor: "hsl(0, 0%, 93%)",
			color: colors.black,
			border: "1px solid hsl(0,0%,88%)"
		},
		black:  { backgroundColor: colors.black },
		grey:   { backgroundColor: colors.grey.base },
		orange: { backgroundColor: colors.orange.base },
		red:    { backgroundColor: colors.red.base },
		blue:   { backgroundColor: colors.blue.base },
		green:  { backgroundColor: colors.green.base },
	},
};


// CODE BLOCK //
export const CodeBlock = {};

CodeBlock.CodeBlock = {
	styles: {
		_base: {
			"border-width": "1px",
			"border-style": "solid",
			"border-color": colors.grey.lighter,
		}
	}
}


// BUTTONS //
export const Buttons = {};

Buttons.Button = {
	defaults: {
		style: "light",
		size: "medium",
	},
	styles: {
		_base: {
			cursor: 'pointer',
			borderWidth: 1,
			borderStyle: 'solid',
			color: colors.white,
			':focus':  { outline: 'none' },
		},
		light: {
			backgroundColor: "hsl(0, 0%, 95%)",
			color: colors.black,
			border: "1px solid hsl(0,0%,80%)",
			':hover':  { backgroundColor: 'hsl(0,0%,98%)' },
			':active': { backgroundColor: 'hsl(0,0%,90%)' },
		},
		black: {
			backgroundColor: colors.black,
		},
		grey: {
			backgroundColor: colors.grey.base,
			border: "1px solid "+colors.grey.dark,
			':hover':  { backgroundColor: colors.grey.light },
			':active': { backgroundColor: colors.grey.dark },
		},
		orange: {
			backgroundColor: colors.orange.base,
			border: "1px solid "+colors.orange.dark,
			':hover':  { backgroundColor: colors.orange.light },
			':active': { backgroundColor: colors.orange.dark },
		},
		red: {
			backgroundColor: colors.red.base,
			border: "1px solid "+colors.red.dark,
			':hover':  { backgroundColor: colors.red.light },
			':active': { backgroundColor: colors.red.dark },
		},
		blue: {
			backgroundColor: colors.blue.base,
			border: "1px solid "+colors.blue.dark,
			':hover':  { backgroundColor: colors.blue.light },
			':active': { backgroundColor: colors.blue.dark },
		},
		green: {
			backgroundColor: colors.green.base,
			border: "1px solid "+colors.green.dark,
			':hover':  { backgroundColor: colors.green.light },
			':active': { backgroundColor: colors.green.dark },
		},
	},
	sizes: {
		small: {
			fontSize: 12,
			padding: '6px 8px',
			borderRadius: 3,
		},
		medium: {
			fontSize: 14,
			padding: '8px 16px',
			borderRadius: 4,
		},
		large: {
			fontSize: 18,
			padding: '12px 20px',
			borderRadius: 4,
		}
	}
}
Buttons.Group = {
	styles: {
		_base: {
			display: 'inline-block',
		}
	}
};


// CONTAINER //
export const Containers = {};

Containers.Container = {
	defaults: {
		"style": "bordered",
	},
	styles: {
		_base: {
			margin: "0 auto",
			width: "100%",
		},
		bordered: {
			"border-style": "solid",
			"border-width": "1px",
			"border-color": colors.grey.lightest,
		}
	}
}


// PAGE LAYOUT //
export const PageLayout = {};

PageLayout.PageLayout = {
	styles: {
		_base: {
			"background-color": DEBUG ? colors.random() : "",
			margin: "0 auto",
			width: "100%",
		}
	}
}
PageLayout.PageHeader = {
	styles: {
		_base: {
			fontFamily: fonts.common,
			color: colors.white,
			borderBottomWidth: "1px",
			borderBottomStyle: "solid",
			borderBottomColor: colors.grey.lighter,
			backgroundColor: DEBUG ? colors.random() : colors.grey.dark,
			padding: "12px 0"
		}
	}
}
PageLayout.PageFooter = {
	styles: {
		_base: {
			fontFamily: fonts.common,
			color: colors.grey.dark,
			borderTopWidth: "1px",
			borderTopStyle: "solid",
			borderTopColor: colors.grey.lighter,
			backgroundColor: DEBUG ? colors.random() : colors.grey.lighter,
			padding: "12px 0"
		}
	}
}

// Navigation List //
export const NavigationList = {};

NavigationList.NavigationList = {
	defaults: {
		orientation: "vertical",
	},
	styles: {
		_base: {
			"list-style": "none",
		},
		horizontal: {
			// border: "1px red solid",
		},
		vertical: {
			"padding-top": "8px",
		}
	},

}


// COLUMN LAYOUT //
export const ColumnLayout = {};

ColumnLayout.ColumnLayout = {
	styles: {
		_base: {
			"background-color": DEBUG ? colors.random() : "",
			display: "flex",
			flexDirection: "row",
		}
	}
}
ColumnLayout.SecondaryColumn = {
	styles: {
		_base: {
			// The two following style are set by
			// prop in the component.
			// flex: "0 0 "+props.width,
			// "align-items": props.verticalAlign,
			width: "200px",
			"vertical-align": "top",
			"background-color": DEBUG ? colors.random() : "",
		}
	}
}
ColumnLayout.PrimaryColumn = {
	styles: {
		_base: {
			"vertical-align": "top",
			"flex-grow": "1",
			"background-color": DEBUG ? colors.random() : "",
		}
	}
}


// IMAGE //
export const Images = {};

Images.Image = {
	styles: {
		_base: {
			"background-size": "cover",
			"background-position": "center",
			"background-repeat": "no-repeat",
		}
	}
}

// export const grid = {
// 	styles: {
// 		_base: {
// 			display: "flex",
// 			"flex-direction": "row",
// 			"flex-wrap": "wrap",
// 			"justify-content": "space-between",
// 		}
// 	}
// }


// CARDS //
export const Cards = {};

Cards.Card = {
	defaults: {
		style: "basic"
	},
	styles: {
		_base: {
			display: "flex",
			"flex-direction": "row",
			"flex-wrap": "wrap",
			"justify-content": "space-between",
		},
		basic: {
			"flex-grow": "1",
			"border-radius": "3px",
			"border": "1px solid "+colors.grey.lighter,
		}
	}
}
// Cards.Banner = {
// 	defaultStyle: "basic",
// 	styles: {
// 		basic: {
// 			"background-color": colors.grey.lightest,
// 			"padding": "12px",
// 			"font-size": "18px",
// 		}
// 	}
// }
// Cards.Heading = {
// 	defaultStyle: "basic",
// 	styles: {
// 		basic: {
//
// 		}
// 	}
// }
// Cards.Paragraph = {
// 	defaultStyle: "basic",
// 	styles: {
// 		basic: {
// 			"padding": "12px",
// 			"font-size": "14px",
// 			"line-height": "20px",
// 		}
// 	}
// }


// CARET //
export const Caret = {};

Caret.Caret = {
	defaults: {
		style: "basic",
		direction: "up",
		size: "10px",
	},
	styles: {
		_base: {
			"width": "0px",
			"height": "0px",
			"cursor": "pointer",
		},
		basic: {
			inactive: {
				"border-color": colors.grey.light,
			},
			active: {
				"border-color": colors.blue.base,
			},
		}
	}
}

// TABLE //
export const Table = {};

Table.Table = {
	defaults: {},
	styles: {
		_base: {
			border: colors.grey.light,
			"border-width": "1px",
		}
	}
}
