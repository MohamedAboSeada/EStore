import { supabase } from './client.mjs';

export async function GetUser(userId) {
	let { data: userData, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', userId);

	return userData;
}

export async function UpdateUser(userId, userData) {
	let { data: updatedData, error } = await supabase
		.from('profiles')
		.update({ ...userData })
		.eq('id', userId)
		.select();
	return updatedData;
}

export async function DeleteUser(userId) {
	let { data: deletedData, error } = await supabase
		.from('profiles')
		.delete()
		.eq('id', userId)
		.select();
	return deletedData;
}

export async function CreateUser(userId, userData) {
	const { data: createdData, error } = await supabase
		.from('profiles')
		.insert({ id: userId, ...userData })
		.select();
        
	return createdData;
}
