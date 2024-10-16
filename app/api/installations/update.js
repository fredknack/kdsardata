import sql from 'mssql';
import { config } from '../../../config'; // Ensure correct path to DB config

export async function PUT(req) {
    const { id } = req.params;
    const { InstallationName, InstallationLocation } = await req.json();

    if (!InstallationName || !InstallationLocation) {
        return new Response('Missing required fields', { status: 400 });
    }

    try {
        await sql.connect(config);
        const result = await sql.query`
            UPDATE Installations
            SET InstallationName = ${InstallationName}, InstallationLocation = ${InstallationLocation}
            WHERE InstallationId = ${id};
        `;
        return new Response('Installation updated successfully', { status: 200 });
    } catch (error) {
        return new Response('Error updating installation', { status: 500 });
    }
}
