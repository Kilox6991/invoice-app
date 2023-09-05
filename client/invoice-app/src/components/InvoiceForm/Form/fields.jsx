import { useState } from 'react'

import {
	FormControl,
	TextField,
	InputLabel,
	FormGroup,
	Stack,
	MenuItem,
	Select,
	OutlinedInput,
} from '@mui/material'


// const FormGroup = ({heading, fields}) => {
// 	return (
// 		<div style={{marginBottom:"46px"}}>
// 			<div style={{marginBottom:"26px"}}>
// 				<label htmlFor="streetAddress" style={{color:"#7C5DFA"}}>Bill to</label>
// 			</div>

// 		</div>
// 	)
// }


const InputField = ({ name, errors, label, value, inputStyles, labelStyles, ...rest }) => {
	console.log(errors)
	return (
		<FormControl>

			<TextField

				error={!!errors}
				helperText={errors?.message}
				id={name}
				{...rest}
				value={value || ''}
				label={label}
				variant="standard"
				InputProps={{
					sx: {
						...inputStyles,
						height: "48px",
						padding: "8px",
						border: "1px solid #DFE3FA",
						borderRadius: "4px",
						fontWeight: "bold"
					},
					disableUnderline: true
				}}
				InputLabelProps={{

					shrink: true,
					disableAnimation: false,
					sx: {
						...labelStyles,
						color: "#7E88C3",
					}
				}}

			/>
		</FormControl>
	)
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,

		},
	},
}

const SelectField = ({
	name,
	label,
	errors,
	value = [],
	options,
	placeholder,
	...rest
}) => {
	console.log(rest)
	return (
		<FormControl sx={{ m: 1, width: 300 }}>
			<Select
				labelId="demo-multiple-name-label"
				id="demo-multiple-name"
				value={value}
				displayEmpty
				{...rest}
				input={<OutlinedInput />}
				renderValue={(selected) => {
					if (selected.length === 0) {
						return <em>{placeholder}</em>
					}

					return typeof selected === 'string' ? selected : selected.join(', ')
				}}
				MenuProps={MenuProps}
			>
				<MenuItem disabled value="">
					<em>{placeholder}</em>
				</MenuItem>

				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.value ? option.label : <em>{option.label}</em>}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

const FileField = ({
	name,
	errors,
	onChange,
	value,
	multiple,
	setValue,
	clearErrors,
	...rest
}) => {
	const [preview, setPreview] = useState(
		'https://fotografias.antena3.com/clipping/cmsimages01/2023/08/24/E013E6C5-BFBB-4977-9A99-F5815FB33FF1/fernando-alonso-piloto-aston-martin-rueda-prensa_97.jpg'
	)

	return (
		<Stack>
			<img src={preview} />
			<FormControl>
				<FormGroup>
					<TextField
						error={!!errors}
						helperText={errors?.message}
						id={name}
						{...rest}
						value={value?.filename}
						onChange={(e) => {
							onChange(e.target.files[0])
							setPreview(URL.createObjectURL(e.target.files[0]))
						}}
						inputProps={{ multiple }}
					/>
				</FormGroup>
			</FormControl>
		</Stack>
	)
}


const Actions = ({ item }) => {
	const Item = item
	return (<Item>dsfasdf</Item>)
}

const HeadingFields = ({ styles, heading }) => {
	return (
		<div style={{ marginBottom: "26px" }} sx={styles}>
			<label htmlFor="streetAddress" style={{ color: "#7C5DFA" }}>
				{heading}
			</label>
		</div>)

}


export default { heading: HeadingFields, input: InputField, select: SelectField, file: FileField, actions: Actions }