// mirageServer.js
import { createServer, Model } from 'miragejs';

export function makeServer() {
    let server = createServer({
        models: {
            users: Model,
            barang: Model,
        },

        seeds(server) {
            server.db.loadData({
                users: [
                    {
                        id: 1,
                        email: 'test@example.com',
                        password: 'password123'
                    },
                    {
                        id: 2,
                        email: 'test1@example.com',
                        password: 'password123'
                    }
                ],
                barang: [
                    {
                        id: 1,
                        namaBarang: 'Barang A',
                        kodeBarang: 'A001',
                        hargaBarang: 1000,
                        jumlahBarang: 2,
                        totalBarang: 2000,
                    },
                    {
                        id: 2,
                        namaBarang: 'Barang B',
                        kodeBarang: 'B002',
                        hargaBarang: 2000,
                        jumlahBarang: 2,
                        totalBarang: 4000,
                    },
                    {
                        id: 3,
                        namaBarang: 'Barang C',
                        kodeBarang: 'C003',
                        hargaBarang: 4000,
                        jumlahBarang: 3,
                        totalBarang: 12000,
                    },
                    {
                        id: 4,
                        namaBarang: 'Barang D',
                        kodeBarang: 'D004',
                        hargaBarang: 5000,
                        jumlahBarang: 2,
                        totalBarang: 10000,
                    }
                ],
                transaksi: [
                    {
                        id: 1,
                        kodeTransaksi: "202101-0001",
                        namaCustomer: 'Customer A',
                        tanggalTransaksi: '01 januari 2022',
                        hargaBarang: 2000,
                        jumlahBarang: 2,
                        totalTransaksi: 4000,
                        noTelepon: '088123456'
                    },
                    {
                        id: 2,
                        kodeTransaksi: "202101-0002",
                        namaCustomer: 'Customer B',
                        tanggalTransaksi: '16 oktober 2022',
                        jumlahBarang: 1,
                        totalTransaksi: 8000,
                        noTelepon: '088123456'
                    },
                    {
                        id: 3,
                        kodeTransaksi: "202101-0003",
                        namaCustomer: 'Customer C',
                        tanggalTransaksi: '06 februari 2023',
                        jumlahBarang: 1,
                        totalTransaksi: 3000,
                        noTelepon: '088123456'
                    },
                    {
                        id: 4,
                        kodeTransaksi: "202101-0004",
                        namaCustomer: 'Customer D',
                        tanggalTransaksi: '20 mei 2024',
                        jumlahBarang: 1,
                        totalTransaksi: 2000,
                        noTelepon: '088123456'
                    }
                ],
            });
        },

        routes() {
            this.namespace = 'api';

            this.post('/login', (schema, request) => {
                const { email, password } = JSON.parse(request.requestBody);
                const user = schema.users.findBy({ email, password });
                if (user) {
                    return { success: true };
                } else {
                    const errorMessage = schema.users.findBy({ email }) ? 'Password salah' : 'Email tidak ditemukan';
                    return { success: false, errorMessage };
                }
            });

            this.get('/barang', (schema) => ({
                barang: schema.db.barang,
            }));

            this.get('/barang/:id', (schema, request) => {
                const id = request.params.id;
                const barang = schema.db.barang.find(id);
                return barang;
            });


            this.post('/barang', (schema, request) => {
                const newBarang = JSON.parse(request.requestBody);
                newBarang.id = schema.db.barang.length + 3;
                schema.db.barang.insert(newBarang);
                return newBarang;
            });


            this.put('/barang/:id', (schema, request) => {
                const id = request.params.id;
                const updatedBarang = JSON.parse(request.requestBody);
                schema.db.barang.update(id, updatedBarang);
                return updatedBarang;
            });


            this.delete('/barang/:id', (schema, request) => {
                const id = request.params.id;
                schema.db.barang.remove(id);
                return {};
            });


            this.get('/transaksi', (schema) => ({
                transaksi: schema.db.transaksi,
            }));

            this.get('/transaksi/:id', (schema, request) => {
                const id = request.params.id;
                const transaksi = schema.db.transaksi.find(id);
                return transaksi;
            });


            this.post('/transaksi', (schema, request) => {
                const newTransaksi = JSON.parse(request.requestBody);
                newTransaksi.id = schema.db.transaksi.length + 3;
                schema.db.transaksi.insert(newTransaksi);
                return newTransaksi;
            });


            this.put('/transaksi/:id', (schema, request) => {
                const id = request.params.id;
                const updatedTransaksi = JSON.parse(request.requestBody);
                schema.db.transaksi.update(id, updatedTransaksi);
                return updatedTransaksi;
            });


            this.delete('/transaksi/:id', (schema, request) => {
                const id = request.params.id;
                schema.db.transaksi.remove(id);
                return {};
            });
        },
    });

    return server;
}
