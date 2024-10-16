import sql from 'mssql';
import { config } from '../../../config'; // Ensure correct path to DB config

export async function DELETE(req) {
    const { id } = req.params;
    try {
        await sql.connect(config);
        const result = await sql.query`DELETE FROM Installations WHERE InstallationId = ${id}`;
        return new Response('Installation deleted successfully', { status: 200 });
    } catch (error) {
        return new Response('Error deleting installation', { status: 500 });
    }
}
